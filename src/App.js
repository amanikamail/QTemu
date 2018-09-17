import React, { Component } from 'react';
import NavbarQTemu from './components/organisms/NavbarQTemu';
import Header from './components/organisms/Header';
import NextMeetup from './components/organisms/NextMeetup';
import AboutMeetup from './components/organisms/AboutMeetup';
import Members from './components/organisms/Members';
import PastMeetup from './components/organisms/PastMeetup';
import Footer from './components/organisms/Footer';
import "./App.css";


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      meetup: {
        image: 'https://via.placeholder.com/500x500',
        title: 'Hacktiv8 Meetup',
        location: 'Jakarta, Indonesia',
        totalMembers: 1078,
        organizer: 'Adhy Wiranata',
      },
      invitation: {
        title: 'Awesome Meetup',
        date: new Date().toString(),
        greetings: 'Hello JavaScript & NodeJS Ninjas!',
        text: 'Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! The meetup format will contain some short stories and technical talks. If you have a short announcement you\'d like to share with the audience,you may do so during open mic announcements. Remember to bring a photo ID to get through building security.  ..... See you there! ',
        organizer: 'Best Hengki, Sofian - The JakartaJS Organizers'
      },
      profile: {
        twitter: '@JakartaJS',
        hashtag: '#jakartajs'
      },
      member: [
        {
          imageProfile: 'https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png',
          name: 'Adhy Wiranata',
          memberType: 'Organizer'
        },
        {
          imageProfile: 'https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png',
          name: 'Bobby Wiranata',
          memberType: 'Member'
        },
        {
          imageProfile: 'https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png',
          name: 'Chandra Wiranata',
          memberType: 'Member'
        }
      ]
    };
  };

  render() {
    return (
      <div>
        <NavbarQTemu/>
        <Header
          image = {this.state.meetup.image}
          title = {this.state.meetup.title}
          location = {this.state.meetup.location}
          totalMembers = {this.state.meetup.totalMembers}
          organizer = {this.state.meetup.organizer}
        />
        <NextMeetup
          title = {this.state.invitation.title}
          date = {this.state.invitation.date}
          greetings = {this.state.invitation.greetings}
          text = {this.state.invitation.text}
          organizer = {this.state.invitation.organizer}
        />
        <AboutMeetup
          twitter = {this.state.profile.twitter}
          hashtag = {this.state.profile.hashtag}
        />
        <Members
        />
        <PastMeetup/>
        <Footer/>
      </div>
    );
  }
}