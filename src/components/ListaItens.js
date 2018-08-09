import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component {
  state = {
    listaFilmes: [
    {
      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "genre_ids": [
        14,
        28,
        80
      ],
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
      "popularity": 48.261451,
      "vote_count": 1466,
      "video": false,
      "vote_average": 5.91
    },
    {
      "poster_path": "/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg",
      "adult": false,
      "overview": "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
      "release_date": "2016-07-27",
      "genre_ids": [
        28,
        53
      ],
      "id": 324668,
      "original_title": "Jason Bourne",
      "original_language": "en",
      "title": "Jason Bourne",
      "backdrop_path": "/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg",
      "popularity": 30.690177,
      "vote_count": 649,
      "video": false,
      "vote_average": 5.25
    },
    {
      "poster_path": "/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg",
      "adult": false,
      "overview": "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
      "release_date": "2016-06-02",
      "genre_ids": [
        28,
        12,
        35,
        80,
        9648,
        53
      ],
      "id": 291805,
      "original_title": "Now You See Me 2",
      "original_language": "en",
      "title": "Now You See Me 2",
      "backdrop_path": "/zrAO2OOa6s6dQMQ7zsUbDyIBrAP.jpg",
      "popularity": 29.737342,
      "vote_count": 684,
      "video": false,
      "vote_average": 6.64
    },
    {
      "poster_path": "/h28t2JNNGrZx0fIuAw8aHQFhIxR.jpg",
      "adult": false,
      "overview": "A recently cheated on married woman falls for a younger man who has moved in next door, but their torrid affair soon takes a dangerous turn.",
      "release_date": "2015-01-23",
      "genre_ids": [
        53
      ],
      "id": 241251,
      "original_title": "The Boy Next Door",
      "original_language": "en",
      "title": "The Boy Next Door",
      "backdrop_path": "/vj4IhmH4HCMZYYjTMiYBybTWR5o.jpg",
      "popularity": 22.279864,
      "vote_count": 628,
      "video": false,
      "vote_average": 4.13
    },
    {
      "poster_path": "/vOipe2myi26UDwP978hsYOrnUWC.jpg",
      "adult": false,
      "overview": "An orphan boy is raised in the Jungle with the help of a pack of wolves, a bear and a black panther.",
      "release_date": "2016-04-07",
      "genre_ids": [
        12,
        18,
        14
      ],
      "id": 278927,
      "original_title": "The Jungle Book",
      "original_language": "en",
      "title": "The Jungle Book",
      "backdrop_path": "/eIOTsGg9FCVrBc4r2nXaV61JF4F.jpg",
      "popularity": 21.104822,
      "vote_count": 1085,
      "video": false,
      "vote_average": 6.42
    },
    {
      "poster_path": "/tgfRDJs5PFW20Aoh1orEzuxW8cN.jpg",
      "adult": false,
      "overview": "Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.",
      "release_date": "2016-08-25",
      "genre_ids": [
        80,
        28,
        53
      ],
      "id": 278924,
      "original_title": "Mechanic: Resurrection",
      "original_language": "en",
      "title": "Mechanic: Resurrection",
      "backdrop_path": "/3oRHlbxMLBXHfMqUsx1emwqiuQ3.jpg",
      "popularity": 20.375179,
      "vote_count": 119,
      "video": false,
      "vote_average": 4.59
    },
    {
      "poster_path": "/cGOPbv9wA5gEejkUN892JrveARt.jpg",
      "adult": false,
      "overview": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
      "release_date": "2016-03-23",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 209112,
      "original_title": "Batman v Superman: Dawn of Justice",
      "original_language": "en",
      "title": "Batman v Superman: Dawn of Justice",
      "backdrop_path": "/vsjBeMPZtyB7yNsYY56XYxifaQZ.jpg",
      "popularity": 19.413721,
      "vote_count": 3486,
      "video": false,
      "vote_average": 5.52
    },
    {
      "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      "adult": false,
      "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
      "release_date": "2015-05-13",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 76341,
      "original_title": "Mad Max: Fury Road",
      "original_language": "en",
      "title": "Mad Max: Fury Road",
      "backdrop_path": "/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
      "popularity": 18.797187,
      "vote_count": 5236,
      "video": false,
      "vote_average": 7.26
    },
    {
      "poster_path": "/5N20rQURev5CNDcMjHVUZhpoCNC.jpg",
      "adult": false,
      "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
      "release_date": "2016-04-27",
      "genre_ids": [
        28,
        53,
        878
      ],
      "id": 271110,
      "original_title": "Captain America: Civil War",
      "original_language": "en",
      "title": "Captain America: Civil War",
      "backdrop_path": "/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
      "popularity": 16.733457,
      "vote_count": 2570,
      "video": false,
      "vote_average": 6.93
    },
    {
      "poster_path": "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
      "adult": false,
      "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
      "release_date": "2015-06-09",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 135397,
      "original_title": "Jurassic World",
      "original_language": "en",
      "title": "Jurassic World",
      "backdrop_path": "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
      "popularity": 15.930056,
      "vote_count": 4934,
      "video": false,
      "vote_average": 6.59
    },
    {
      "poster_path": "/gj282Pniaa78ZJfbaixyLXnXEDI.jpg",
      "adult": false,
      "overview": "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
      "release_date": "2014-11-18",
      "genre_ids": [
        878,
        12,
        53
      ],
      "id": 131631,
      "original_title": "The Hunger Games: Mockingjay - Part 1",
      "original_language": "en",
      "title": "The Hunger Games: Mockingjay - Part 1",
      "backdrop_path": "/83nHcz2KcnEpPXY50Ky2VldewJJ.jpg",
      "popularity": 15.774241,
      "vote_count": 3182,
      "video": false,
      "vote_average": 6.69
    },
    {
      "poster_path": "/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg",
      "adult": false,
      "overview": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
      "release_date": "2015-04-01",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 168259,
      "original_title": "Furious 7",
      "original_language": "en",
      "title": "Furious 7",
      "backdrop_path": "/ypyeMfKydpyuuTMdp36rMlkGDUL.jpg",
      "popularity": 13.659073,
      "vote_count": 2718,
      "video": false,
      "vote_average": 7.39
    },
  ],
  }

  /*componentWillMount() {
    //requisição http
    const key = 'b9db7b5b3d4aeb27928b58e1cf7beae0';
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
      .then((response) => {
         console.tron.log(response);
         this.setState({ listaFilmes: response.data.results });
         console.tron.log(this.state.listaFilmes);
       });
  }*/

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.listaFilmes.map(lista =>

             <Itens
               key={lista.title}
               title={lista.title}
               date={lista.release_date}
               sinopse={lista.overview}
               capa={lista.poster_path}
               backdrop={lista.backdrop_path}
             />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060606'
  },
});
