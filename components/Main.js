import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Image, Text, Modal, View, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form'


export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Discover the genius of Google!',
      full: 'Google is not just a search engine; it’s a universe of infinite possibilities. Explore, innovate, and redefine the future with the tech giant that’s changing the world!',
      key: '1',
      img: 'data:image/png;base64,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', 
    },
    {
      name: 'Apple',
      anons: 'Innovation redefined!',
      full: 'Apple stands at the pinnacle of creativity and technology. Dive into the seamless world of Apple and experience the elegance, power, and magic it brings to life!',
      key: '2',
      img: 'data:image/jpeg;base64,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',
    },
    {
      name: 'FaceBook',
      anons: 'Connects the world!',
      full: 'Facebook is more than social networking; it’s a global phenomenon. Join the platform that bridges gaps, creates opportunities, and empowers communities worldwide!',
      key: '3',
      img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU7V53///8yUZojR5bi5u+GlL45VZxCXqHd4e01U5tvgLMnSZbO1ORZb6rr7vU3VJwtTZi5wdmSn8SvudT19vrx8/instB/j7weRJR1hraMmsJidq2+xtzX3OrK0OKgrMxbcatPZ6Zleq8ANY9428BgAAAD/ElEQVR4nO3d23KbMBSFYSGwMAgEBp/jHJy+/zsW7LrtRYbIEGlvadZ/05uU8A02iiXAIvlT1ZW5iKW87KoHTNz/6XMtlaLesR9LKanz/j+hqXU8ukdK1+YhzBpJvTtOkk12F5qmod4XRzWNuQnrgnpPnFXUo7DX1PvhMN0Pwjy+k8y/VJ6IKuZDOBzESnRxnkcfyU6UMb9Ih5dpKaJ+G45vROo9QAghhBBCCCGEEEKIvEK2Ok3139JbWrdDUhYq6PVOJbUWL6v9pVqb3fbWbmeybP1avV02/Xu3Or1c8/GHgky1ab66ZMm3bc1rgLOhw9H72Fvo/hTcfLZq225tzQtQ2Ir+GV5wwlbun/SFJVTpYfc0MCShFG/P+0IS6s/tHGA4Qt3N8gUjVMdnT6GBCZW+zAUGIkw3s4FhCPXzo2BYwna1ABiCcLzyLGqhak3kQj17nAhEWLwsA/IXHp/6MBigUB4WArkLVWs/XRGmcPkh5C5Ml74LuQuLj8VA5kK94C/uIIRKzvtYH46wOC0H8hb+xIuUuXDG5GFQwub6A0DWQnl+irI16+qLOK89tfZvw93mcC30l1ErptK2f9CsTzrI+1tVYTkantNAb1tSVzvgZ0u9p3OTpRWwDBZoeSrdpNT7Ob/Wah445BuUrQaLDevR4Ju0zYJoGfI92Lr6HrgN+UVqNYOxDvlFKlKLabZL9MJ9uIOhsBOGfZu5jfAcvXAFIesghJB/EELIPwgh5B+EEPIPQgj5ByGE/ItDqCY6WgmntsDhTud8IptLS8+TWxij9RV2q7xLymin/T0I36IX9rQLGx6ExAsbHoSn6IU17SKxByGpz4fQEK+guhdSr/O7FxIPhx6E1Ov87oXUq+DuhdSXTLkXXok/PrkXtrELDfUlU86Fr9ELL9QXhTkXvkcvJJ+Kcy58ob6C2LmQ/K4u18It9XDoXJiR34vhWkj/RVWuhRvqwcK5kP4aadfCE/Vg4VxYU59KnQupfc6FO/Lh0LWQeirRvZB6KnFIfWbriSxudDYT/z17Jx8shoP49S30935ZrHIfjhMbYACcLo5rMaaCEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPzzKCR66pkvocpFGbmwFEQPlPIllJ0geuyZL6GuBNHjBz0JVZ6IpCc5iJ6Euh+ESU3x4DM/wqJORqFpCL5EwYuwacxNmGSF//OpD6Esxl8yChNTa9+nG/dCpWuTPIRJ0udaekW6FSoldd7ftyIem6u60ucXRLkV5mVXPbbyG8lbTVu7+lVZAAAAAElFTkSuQmCC',
    },
]);


  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [
        article,
        ...list
      ]
    });
    setModalWindow(false);
  }

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <TouchableOpacity onPress={() => setModalWindow(false)}>
            <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} />
          </TouchableOpacity>
          <Text style={styles.title}>The form for adding an article</Text>
          <Form addArticle={ addArticle} />
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalWindow(true)}>
        <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} />
      </TouchableOpacity>
      <Text style={[gStyle.title, styles.header]}>Main</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('FullInfo', item)}>
            <Image style={styles.image} source={{ uri: item.img }} />
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15,
  },
  iconClose: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  },
});
