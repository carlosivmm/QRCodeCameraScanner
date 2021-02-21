import React from 'react';
import {Button} from 'react-native';
import {ScrollView, Alert} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';

const App = () => {
  const [buttonCamera, setButtonCamera] = React.useState(false);

  const onPressButtonCamera = () => setButtonCamera(true);
  const onSuccess = (e) => Alert.alert('Mensaje', e.data);

  return (
    <ScrollView>
      <Button title="Abrir cámara" onPress={onPressButtonCamera} />
      {buttonCamera && (
        <QRCodeScanner
          onRead={onSuccess}
          reactivate
          reactivateTimeout={5000}
          // flashMode={RNCamera.Constants.FlashMode.torch}
        />
      )}
    </ScrollView>
  );
};

export default App;
