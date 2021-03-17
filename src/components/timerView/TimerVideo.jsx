import React, { Component } from 'react';
import ReactPlayer from 'react-player';
export default class PopUp extends Component {
    links = [
        'https://www.youtube.com/watch?v=9tOJZQhO_Uw',
        'https://www.youtube.com/watch?v=ECxYJcnvyMw',
        'https://www.youtube.com/watch?v=TfuWjmdxMvU',
        'https://www.youtube.com/watch?v=AOL3isokmY4',
        'https://www.youtube.com/watch?v=aXItOY0sLRY',
        'https://www.youtube.com/watch?v=aNXKjGFUlMs'
    ];
    handleClick = () => {
        this.props.toggle();
    };

    getLink = () => {
        console.log(this.links[Math.floor(Math.random() * this.links.length)]);
        return this.links[Math.floor(Math.random() * this.links.length)];
    };

    render() {
        return (
            <div className="timer-video">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>
                        &times;{' '}
                    </span>
                    <ReactPlayer url={this.getLink()} />
                </div>
            </div>
        );
    }
}
