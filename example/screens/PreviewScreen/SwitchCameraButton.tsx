import { InCallButton } from '../../components';
import React, { FC, useCallback } from 'react';
import { previewScreenLabels } from '../../types/ComponentLabels.ts';
import {
  displayIosSimulatorCameraAlert,
  isIosSimulator,
} from '../../utils/deviceUtils.ts';

interface SwitchCameraButton {
  switchCamera: () => void;
}
export const SwitchCameraButton: FC<SwitchCameraButton> = (props) => {
  const { switchCamera } = props;

  const { SWITCH_CAMERA_BUTTON } = previewScreenLabels;

  //todo Switches between front-facing and back-facing cameras or displays a list of available cameras.
  const handleCameraSwitchPress = useCallback(() => {
    if (isIosSimulator) {
      displayIosSimulatorCameraAlert();
      return;
    }

    switchCamera();
  }, [switchCamera]);

  return (
    <InCallButton
      iconName="camera-switch"
      onPress={handleCameraSwitchPress}
      accessibilityLabel={SWITCH_CAMERA_BUTTON}
    />
  );
};
