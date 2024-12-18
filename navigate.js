import React, { useState } from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen            
                name='Main'
                component={Main}
                options={{
                    title: 'Main',
                    headerStyle: { backgroundColor: '#eb5d3d', height: 100 },
                    headerTitleStyle: {fontWeight: '400'}
                }}
            />
            <Stack.Screen            
                name='FullInfo'
                component={FullInfo}
                options={{title: 'FullInfo'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}



