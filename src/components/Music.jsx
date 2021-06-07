import React, { Component } from 'react';

class Music extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [
        '4l1gy3h0r9BV5lMLGNT294',
        '6EwMmq7avNIuf9HFvPzaTA',
        '5WgW1FD8eOYaY18vGP2tzl',
        '37i9dQZF1DX7EF8wVxBVhG',
        '6Kmg5mn0z8yDSiYI6Du2GJ',
        '0vvXsWCC9xrXsKd4FyS8kM',
        '0Jt2JW0NTIL6MvV9dSOnqZ',
        '56dbowk1V5ycS5jW7DSvi5',
        '2KhC8BInyckeU3xeld5aPn',
        '3DIjw8eboATMgRN2RC6mz6',
        '37i9dQZF1DWXLeA8Omikj7',
        '37i9dQZF1DX6ziVCJnEm59',
        '5S09JdDxBojhLL6DpUkaBA',
        '7jnQofo35chqeisy6JnWsk',
        '37i9dQZF1E8H5rsijCkdhG',
        '1Bz8Xqf5g7I98wEYAfI2Ev',
        '37i9dQZF1DX8ZSkZGhJFi1',
        '1VWJjbN7LBzM6M4FG76ImT',
        '5NCQHXMzwDSPXqWYKG7leT',
        '00BjGF5XAH8Fl7YMtfm3wU',
        '6U6CwgwmKbN9KvN9Mh92fs',
        '27mb9FwtGOTSnKzH8ebAYq',
        '4ETfiRPHVmUFLF6q0g8Fux',
        '37i9dQZF1DX2aCk0vzzaZQ',
        '4FWcHo5LUmeLjczq3cAGy8',
        '3M97Ok4G2iuWuP9YyeGNCM',
        '5Whb5YPTBJeHRoD69BU0ds',
        '7zveXixYaGG5RiTDVGwtmo',
        '4IDJ3lwdBHetWEXdQgLpFA',
        '37i9dQZF1DWXMJdkLQRrmg',
        '6jRrrtec4noKqHOBa5WEC3',
        '2ZKHLbTQZlYXBkSWiKNBo9',
        '37i9dQZF1DWZeKCadgRdKQ',
        '45AMFCnArmrNNygPoiVtqh',
        '0JxvlFVmBQ08uHcjbzZkLC',
        '2MY6af5Z1mos5Bi52S3xEX',
        '4NXRS4SSmGauTKqY2CcDRl',
        '37i9dQZF1DX1zM9gA91vC5',
        '23BPtay85THHjP6naVqQOv',
        '6bUBpdLtsXYJESmT4MnMw5',
        '69mvXDhX8WxJBWsdoFUlBM',
      ],
      playlistsTurmas: {
        T13A: '1Hk1ZtfUJ3yD7JdVNx3Hd9',
        T13B: '6PPHiwUvoGGUuSgAplDmfT',
        T12: '7dtD3j0iVfSTkS8b6MgIiD',
        T11: '6QO8sW6YXnlPL6Ivms7oOw',
        T10A: '01VHprauPVbPjsQeryBART',
        T10B: '4MRiikcAZN7n4Cnrr9dtjX',
        T9: '4tvzbMapPt4t4FUTH4XiDl',
        T7: '5hpYeG9vuKqDAyRyDn5n9O',
        T8: '7GTIEZ37liwSCOUsNw2qyJ',
        T5: '5AV8O6Cxntd4KI4p8XTmfw',
        T3: '5lpSoLmu6zRQ08Aki7VFFg',
      },
      selected: '01VHprauPVbPjsQeryBART',
    };
    this.selectTRplaylist = this.selectTRplaylist.bind(this);
    this.randomPlaylist = this.randomPlaylist.bind(this);
    this.nextPlayList = this.nextPlayList.bind(this);
    this.previousPlayList = this.previousPlayList.bind(this);
  }

  selectTRplaylist(e) {
    this.setState({ selected: e.target.id });
  }

  randomPlaylist() {
    const { playlists } = this.state;
    const numberOf = playlists.length;
    const randomP = Math.floor(Math.random() * numberOf);
    this.setState({ selected: playlists[randomP] });
  }

  nextPlayList() {
    const { selected, playlists } = this.state;
    const index = playlists.indexOf(selected);
    this.setState({ selected: playlists[index + 1] });
  }

  previousPlayList() {
    const { selected, playlists } = this.state;
    const index = playlists.indexOf(selected);
    this.setState({ selected: playlists[index - 1] });
  }

  render() {
    const { selected, playlistsTurmas } = this.state;
    const playlistEntries = Object.entries(playlistsTurmas);
    return (
      <section className="iframeSec">
        <div className="playlist-buttons">
          <div className="pt">
            <h3 className="title is-4"> Playlists de turmas </h3>
            <div className="playlist-turmas">
              { playlistEntries.map((playlist) => (
                <button
                  onClick={this.selectTRplaylist}
                  id={playlist[1]}
                  key={playlist[0]}
                  className="button is-success is-outlined"
                  type="button"
                >
                  { playlist[0] }
                </button>
              )) }
            </div>
          </div>
          <div className="pr">
            <h3 className="title is-4"> Playlists do Slack </h3>
            <div className="playlist-random">
              {/* eslint-disable jsx-a11y/control-has-associated-label */}
              <button className="button is-primary" type="button" onClick={this.previousPlayList}><i className="fas fa-arrow-alt-circle-left" /></button>
              <button className="button is-primary" type="button" onClick={this.randomPlaylist}> Aleatória </button>
              <button className="button is-primary" type="button" onClick={this.nextPlayList}><i className="fas fa-arrow-alt-circle-right" /></button>
            </div>
          </div>
        </div>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${selected}`}
          width="70%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Music Player"
        />
      </section>
    );
  }
}

export default Music;
