import React from 'react';

import { DeskSceneState } from './DeskSceneState';
import { Computer } from './scene/Computer';

import './desk-scene.scss';

export class DeskScene extends React.Component {
  private readonly whState = new DeskSceneState();
  public render() {
    return (
      <div className={'desk-scene'}>
        <div className={'back-wall'}></div>
        <div className={'desk'}></div>
        <Computer whState={this.whState} />
        <div className={'monitor'}>
          <div className={'monitor-screen'}></div>
        </div>
        <div className={'monitor-stand'}></div>
        <div className={'monitor-stand-foot'}></div>
      </div>
    );
  }
}
