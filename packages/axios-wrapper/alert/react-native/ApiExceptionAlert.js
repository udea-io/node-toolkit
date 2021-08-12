import { Alert } from 'react-native';
import { get } from 'lodash';

export default (
    text = {
      btnOk: 'OK',
      btnMore: 'More',

      title: 'API Request Failure',
      desc: 'The action is failure.',
    },
  ) =>
  (response, callback) => {
    return Alert.alert(
      text.title,
      text.desc,
      [
        {
          text: text.btnOk,
          onPress: () => callback && callback(),
          style: 'cancel',
        },
        {
          text: text.btnMore,
          onPress: () => {
            Alert.alert(
              text.btnMore,
              `Status Code: ${response.status}\nMessage: "${
                get(response, 'data.message') || get(response, 'message')
              }"`,
              [
                {
                  text: text.btnOk,
                  onPress: () => callback && callback(),
                  style: 'cancel',
                },
              ],
            );
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };
