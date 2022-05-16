/* eslint-disable no-undef */
var io = required('socket.io-client');
var socket = io.connect('http://localhost:3000');
var peerConnections = {};

socket.on('connect', function () {
  console.log('connected');
  socket.emit('join', 'user1');
});

socket.on('disconnect', function () {
  console.log('disconnected');
});

socket.on('message', function (message) {
  console.log(message);
});

socket.on('user joined', function (user) {
  console.log(user.username + ' joined');
});

socket.on('user left', function (user) {
  console.log(user.username + ' left');
});

socket.on('offer', function (offer) {
  console.log('offer received');
  var pc = peerConnections[offer.from];
  if (!pc) {
    pc = peerConnections[offer.from] = new RTCPeerConnection(null);
    pc.onicecandidate = function (event) {
      if (event.candidate) {
        socket.emit('candidate', {
          to: offer.from,
          candidate: event.candidate
        });
      }
    };
    pc.ondatachannel = function (event) {
      console.log('ondatachannel');
      var channel = event.channel;
      channel.onmessage = function (event) {
        console.log('received message:', event.data);
      };
    };
  }
  pc.setRemoteDescription(new RTCSessionDescription(offer));
  pc.createAnswer(function (answer) {
    pc.setLocalDescription(answer);
    socket.emit('answer', {
      to: offer.from,
      answer: answer
    });
  }, function (error) {
    console.log(error);
  });
});

socket.on('candidate', function (candidate) {
  console.log('candidate received');
  var pc = peerConnections[candidate.to];
  if (pc) {
    pc.addIceCandidate(new RTCIceCandidate(candidate.candidate));
  }
});


