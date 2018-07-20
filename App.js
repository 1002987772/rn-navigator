import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Root from './app/containers/root/RootNavigationContainer'
import dva from './app/utils/dva'
import models from './app/models/index'

const app = dva({
  models: models,
  onError(e) {
  },
})

const APP = app.start(<Root/>)

export default APP