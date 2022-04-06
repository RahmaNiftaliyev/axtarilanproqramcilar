# Folder Structure Conventions  

# <Folder structure options and naming conventions for software projects>

A typical top-level directory layout
.
├── build                   # Compiled files (alternatively `dist`)
├── docs                    # Documentation files (alternatively `doc`)
├── src                     # Source files (alternatively `lib` or `app`)
├── test                    # Automated tests (alternatively `spec` or `tests`)
├── tools                   # Tools and utilities
├── LICENSE
└── README.md

Use short lowercase names at least for the top-level files and folders except LICENSE, README.md

Source files
The actual source files of a software project are usually stored inside the src folder. Alternatively, you can put them into the lib (if you're developing a library), or into the app folder (if your application's source files are not supposed to be compiled).

Samples: jQuery src, Node.js lib and src, D3.js src, AngularJS src, Adobe Brackets src, three.js src, Express lib, Socket.IO lib, Less.js lib, Redis src, Ace lib, Semantic UI src, Zepto.js src, Emscripten src, RethinkDB src, Bitcoin src, MongoDB src, Facebook React src, Rust src, ASP.NET src, SignalR src, libgit2 src

Automated tests
Automated tests are usually placed into the test or, less commonly, into the spec or tests folder.

Q: Why tests are placed into a separate folder, as opposed to having them closer to the code under test?

A: Because you don't want to test the code, you want to test the program.

.
├── ...
├── test                    # Test files (alternatively `spec` or `tests`)
│   ├── benchmarks          # Load and stress tests
│   ├── integration         # End-to-end, integration tests (alternatively `e2e`)
│   └── unit                # Unit tests
└── ...

Samples: jQuery, Node.js, D3.js, AngularJS, Adobe Brackets, three.js, Express, Socket.IO, Less.js, Bower, Mozilla PDF.js, Grunt, Gulp, Semantic UI, Zepto.js, Jade, RethinkDB, Vagrant, Sails.js, GitHub Hubot, Facebook React, Ansible, ASP.NET, browserify, Paper.js, Julia, Karma

Documentation files
Often it is beneficial to include some reference data into the project, such as Rich Text Format (RTF) documentation, which is usually stored into the docs or, less commonly, into the doc folder.

.
├── ...
├── docs                    # Documentation files (alternatively `doc`)
│   ├── TOC.md              # Table of contents
│   ├── faq.md              # Frequently asked questions
│   ├── misc.md             # Miscellaneous information
│   ├── usage.md            # Getting started guide
│   └── ...                 # etc.
└── ...

![ScreenShot_20220406094017](https://user-images.githubusercontent.com/58683199/162051113-6126be35-608c-4b86-a676-a80aa17c3689.jpeg)

Samples: HTML5 Boilerplate doc, Backbone docs, three.js docs, GitLab doc, Underscore.js docs, Discourse docs, Grunt docs, Emscripten docs, RethinkDB docs, RequireJS docs, GitHub Hubot docs, Twitter Flight doc, Video.js docs, Bitcoin doc, MongoDB docs, Facebook React docs, libgit2 docs, Stylus docs, Gulp docs, Brunch docs

Scripts
...

Tools and utilities
...

Compiled files
...

3rd party libraries
...

License information
If you want to share your work with others, please consider choosing an open source license and include the text of the license into your project. The text of a license is usually stored in the LICENSE (or LICENSE.txt, LICENSE.md) file in the root of the project.

You’re under no obligation to choose a license and it’s your right not to include one with your code or project. But please note that opting out of open source licenses doesn’t mean you’re opting out of copyright law.

You’ll have to check with your own legal counsel regarding your particular project, but generally speaking, the absence of a license means that default copyright laws apply. This means that you retain all rights to your source code and that nobody else may reproduce, distribute, or create derivative works from your work. This might not be what you intend.

Even in the absence of a license file, you may grant some rights in cases where you publish your source code to a site that requires accepting terms of service. For example, if you publish your source code in a public repository on GitHub, you have accepted the Terms of Service which do allow other GitHub users some rights. Specifically, you allow others to view and fork your repository.

For more info on how to choose a license for an open source project, please refer to <http://choosealicense.com>
