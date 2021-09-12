import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

export default (
    text = {
      btnOk: 'OK',
      btnMore: 'More',

      title: 'Server unavailable',
      desc: 'More',
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
          onPress: async () => {
            const networkState = await NetInfo.fetch();
            Alert.alert(
              text.btnMore,
              `Is Connected: ${networkState.isConnected}\nInternet Reachable: ${
                networkState.isInternetReachable
              }\nDetails: ${JSON.stringify(networkState.details)}`,
              [
                {
                  text: text.btnOk,
                  onPress: () => {
                    if (typeof callback === 'function') callback(networkState);
                  },
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
