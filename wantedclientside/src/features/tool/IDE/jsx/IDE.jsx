import React, { useState, useEffect } from 'react';
import styles from './../css/ide.module.css';
import projectSvg from './../assets/svg/icons-aside/project.svg';
import gitSvg from './../assets/svg/icons-aside/git.svg';
import gitMiniSvg from './../assets/svg/icons-footer/git.svg';
import searchSvg from './../assets/svg/icons-aside/search.svg';
import pluginsSvg from './../assets/svg/icons-aside/plugins.svg';
import settingsSvg from './../assets/svg/icons-aside/settings.svg';

const IDE = () => {
  const [project, setProject] = useState('');
  const [git, setGit] = useState('');
  const [search, setSearch] = useState('');
  const [plugins, setPlugins] = useState('');
  const [settings, setSettings] = useState('');

  // Select a language or open a different editor to get started. Start typing to dismiss or don't show this again

  return (
    <div className={`${styles.ide_background}`}>
      {/*! ASIDE LOGIC BEGINS HERE */}
      <div className={`${styles.aside}`}>
        <div
          className={`${styles.aside_header} d-flex justify-content-between`}
        >
          <div
            className={`${styles.round_container} d-flex justify-content-between`}
          >
            <div className={`${styles.red}`}></div>
            <div className={`${styles.yellow}`}></div>
            <div className={`${styles.green}`}></div>
          </div>
          <h2>Editor</h2>
        </div>
        <div className={`${styles.svg_options} d-flex justify-content-between`}>
          <div>
            <label htmlFor="project">
              <img
                src={projectSvg}
                alt="ide aside menu options project git search plugin settings"
              />
            </label>
            <input
              type="file"
              id="project"
              name="project"
              directory="directory"
              webkitdirectory="webkitdirectory"
              accept=""
              style={{
                visibility: 'hidden',
                width: '0',
                height: '0',
              }}
            />
          </div>
          <div>
            <img
              src={gitSvg}
              alt="ide aside menu options project git search plugin settings"
            />
          </div>
          <div>
            <img
              src={searchSvg}
              alt="ide aside menu options project git search plugin settings"
            />
          </div>
          <div>
            <img
              src={pluginsSvg}
              alt="ide aside menu options project git search plugin settings"
            />
          </div>
          <div>
            <img
              src={settingsSvg}
              alt="ide aside menu options project git search plugin settings"
            />
          </div>
        </div>
      </div>
      {/*! HEADER LOGIC BEGINS HERE */}
      <div className={`${styles.header}`}></div>
      {/*! CODE AREA LOGIC BEGINS HERE */}
      <div className={`${styles.main} text-white`} contentEditable={true}>
        <div className={`${styles.code_area}`}></div>
      </div>
      {/*! FOOTER LOGIC BEGINS HERE */}
      <div className={`${styles.footer}`}>
        <ul className={`d-flex align-items-center`}>
          <li>
            <span>LF</span>
          </li>
          <li>
            <span>Line 5:36</span>
          </li>
          <li>
            <span>UTF8</span>
          </li>
          <li>
            <span>2 spaces</span>
          </li>
          <li>
            <img src={gitMiniSvg} alt="github branch icon mini cvg" />
            <span>main</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IDE;
