import * as React from 'react';
import { Text as ReactNativeText } from 'react-native';
import { mergeAll, flatten } from 'ramda';
import { useTranslation } from 'react-i18next';

import { COLORS_NEW } from '../../constants/colors.new';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function AppText(props) {
  const { t } = useTranslation();

  // grab the props
  const {
    preset = 'PARAGRAPH_1R_16',
    color = 'darkBlue',
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  // figure out which content to use
  const i18nText = t(tx);
  const content = i18nText || text || children;

  if (!content) return null;

  const style = mergeAll(flatten([{ color: COLORS_NEW[color] }, styleOverride]));

  return (
    <ReactNativeText {...rest} style={style} allowFontScaling={false}>
      {content}
    </ReactNativeText>
  );
}
