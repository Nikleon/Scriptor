import React, {Component} from 'react';
import APIClient from './api/APIClient.js';
import './History.css';


class History extends Component {
  state = {
    queries: [],
    podcasts: []
  };
  
  returnURL(item){
      if(item.video_url.length < 1){
          item.video_url = item.audio_url
      }
      return item.video_url
  }

  formatName(back){
    const quarter = back.podcast.quarter.split(' ');
    const qString = quarter[0].substr(0,1) + quarter[1].substr(2,3);
    var prof = back.podcast.professor;
    prof = prof.substring(prof.indexOf(',') + 1, prof.length) + " " +
        prof.substring(0, prof.indexOf(','))
    return back.podcast.department + ' ' + back.podcast.course_num + " - " + back.podcast.title + " [" + back.podcast.section_id + " - " + qString + "] | " + prof + " | Lecture " + back.podcast.lecture_num
  }

  componentDidMount() {
    APIClient.getHistory().then(response => {
      response.forEach(element => {
        if(element.type === 'SEARCH_QUERY') {
          if(this.state.queries.indexOf(element.title) === -1) {
            this.setState(prevState => ({queries: [...prevState.queries, element.title]}));
          }
        } else {
          APIClient.getPodcastSnippet(element.url.split('/')[4]).then(backer => {
            const name = this.formatName(backer);
            if(this.state.podcasts.indexOf(name) === -1) {
              this.setState(prevState => ({podcasts: [...prevState.podcasts, name]}));
            }
          }); 
        }
      });
    });
  }

  render() {
    if(APIClient.isCurrentUserLoggedIn()) {
      return (
        <div className = "history">
          <div className='header'>
            <h1>HISTORY</h1>
          </div>
          <div className = "search" >
            <h1> You've Searched For...
              <div>
                <ul>
                {this.state.queries.map((item, index)  => (
                  <li className = 'searches' key={index}>
                    <div>
                      {item}
                    </div>
                  </li>
                ))}
                </ul>
              </div>
            </h1>
            <h2>You've Found...
                <div>
                  <ul>
                  {this.state.podcasts.map((item, index)  => (
                    <li className = 'results' key={index}>
                      <div>{item}</div>
                    </li>
                  ))}
                </ul>
                </div>
              </h2>
          </div>
        </div>
      );
    } else {
      window.location.assign('/');
    }
  }
}
export default History;
