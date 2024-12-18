import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button} from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';


export default function Form({addArticle}) {


    return (
        <View>
            <Formik initialValues={{ name: '', anons: '', full: '', img: '' }} onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm();

            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder='Input name'
                            onChangeText={props.handleChange('name')} />
                        <TextInput
                            style={styles.input}
                            value={props.values.anons}
                            multiline
                            placeholder='Input anons'
                            onChangeText={props.handleChange('anons')} />
                        <TextInput
                            style={styles.input}
                            value={props.values.full}
                            multiline
                            placeholder='Input full'
                            onChangeText={props.handleChange('full')} />
                        <TextInput
                            style={styles.input}
                            value={props.values.img}
                            placeholder='Input img'
                            onChangeText={props.handleChange('img')} />
                        <Button title='Add' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
      </View>
    );
  
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5

    }
});




