// import { StyleSheet  } from "react-native";
import Metrics from './metrics';
import { COLORS_NEW } from './colors.new';
// import { COLORS_NEW } from './colors.new';

const SCREEN_CONTAINER = {
  flex: 1,
  backgroundColor: COLORS_NEW.white
};

const SCREEN_SUB_CONTAINER = {
  flex: 1,
  marginHorizontal: Metrics.rfv(20)
};

const SCREEN_SUB_CONTAINER_WITHOUT_TOP = {
  flex: 1,
  marginHorizontal: Metrics.rfv(20)
};

const FLEX_LAYOUT = {
  flex: 1
};

const HEADER_TITLE = {
  fontSize: FONT_SIZE.large,
  color: COLORS_NEW.text,
  lineHeight: Metrics.rfv(40)
};

const TITLE_TEXT = {
  fontWeight: '400',
  lineHeight: Metrics.rfv(28),
  letterSpacing: 0.4,
  color: COLORS_NEW.text,
  width: '90%',
  textAlign: 'center'
};

const TITLE_TEXT_ALIGN = {
  textAlign: 'center'
};

const TITLE_TEXT_LARGE = {
  fontSize: FONT_SIZE.large
};

const INFO_TEXT = {
  color: COLORS_NEW.gray
};

const SUB_TITLE = {
  fontSize: FONT_SIZE.medium,
  lineHeight: Metrics.rfv(24),
  letterSpacing: 0.4
};

const VIEW_TOP_CONTAINER = {
  flex: 1
};

const VIEW_BOTTOM_CONTAINER = {
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
};

const VIEW_BOTTOM_NEW_CONTAINER = {
  flex: 1
};

const VIEW_ROW = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

const VIEW_ABSOLUTE_LINE = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 1,
  backgroundColor: COLORS_NEW.lightGray
};

const VIEW_LINE = {
  width: '100%',
  height: 1,
  backgroundColor: COLORS_NEW.lightGray
};

const VIEW_CONTAINER = {
  paddingHorizontal: Metrics.rfv(15),
  borderRadius: Metrics.rfv(6),
  backgroundColor: COLORS_NEW.mainBG,
  height: Metrics.rfv(50),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const VIEW_TOP_EXTRA_MARGIN = {
  marginTop: Metrics.rfv(10)
};

const VIEW_TOP_MARGIN_12 = {
  marginTop: Metrics.rfv(12)
};

const VIEW_TOP_MARGIN_16 = {
  marginTop: Metrics.rfv(16)
};

const BUTTON_TEXT = {
  fontWeight: '500',
  lineHeight: Metrics.rfv(25),
  letterSpacing: 0.4,
  color: COLORS_NEW.white,
  fontSize: FONT_SIZE.medium,
  width: '90%',
  fontFamily: FONTS.primaryMediumFont,
  textAlign: 'center'
};

const BUTTON_WITH_BACKGROUND = {
  backgroundColor: COLORS_NEW.blue
};

const BUTTON_WITHOUT_BACKGROUND = {
  backgroundColor: COLORS_NEW.white,
  borderColor: COLORS_NEW.blue,
  borderWidth: 1
};

const BUTTON_THIRD_STYLE = {
  backgroundColor: COLORS_NEW.skyBlue
};

const BUTTON_DISABLE = {
  backgroundColor: COLORS_NEW.nonActiveButton
};

const BUTTON_SMALL = {
  width: Metrics.rfv(160)
};
const BUTTON_TOP_MARGIN = {
  marginTop: Metrics.rfv(24),
  marginBottom: Metrics.rfv(16)
};

const VIEW_BOTTOM_EXTRA_MARGIN = {
  // In figma its 48 and 34 is the safe bottom
  marginBottom: Metrics.rfv(14)
};

/**
 * Error styles
 */
const ERROR_MAIN_CONTAINER = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingVertical: 5,
  width: '100%',
  minHeight: Metrics.rfv(66),
  backgroundColor: COLORS_NEW.red,
  borderRadius: 6
};

const ERROR_ICON_CONTAINER = {};

const ERROR_DAGNER_ICON = {
  width: Metrics.rfv(32),
  height: Metrics.rfv(32)
};

const ERROR_MESSAGE = {
  color: COLORS_NEW.white,
  fontSize: FONT_SIZE.medium
};

const ERROR_TEXT_CONTAINER = {
  maxWidth: '80%'
};

const BACKGROUND_STYLE = {
  backgroundColor: COLORS_NEW.mainBG
};

const BUTTON_CONTAINER = {
  //marginBottom: Metrics.rfv(20),
  height: Metrics.rfv(48),
  marginHorizontal: '4%',
  justifyContent: 'center',
  borderRadius: Metrics.rfv(8),
  backgroundColor: COLORS_NEW.blue,
  width: '92%'
};

const TITLE = {
  fontSize: FONT_SIZE.large,
  fontWeight: '500',
  lineHeight: Metrics.rfv(40),
  letterSpacing: 0.1,
  color: COLORS_NEW.text,
  marginVertical: Metrics.rfv(10),
  textAlign: 'center'
};

const ERROR_CLOSE_ICON = {};

const ERROR_STYLE = {
  marginBottom: Metrics.rfv(-10),
  backgroundColor: COLORS_NEW.white,
  borderWidth: Metrics.rfv(1),
  borderColor: COLORS_NEW.red,
  padding: Metrics.rfv(8),
  paddingVertical: Metrics.rfv(16)
};

const lblTitleStyle = {
  marginHorizontal: Metrics.rfv(10),
  color: COLORS_NEW.darkBlue
};

const lblDescStyle = {
  marginHorizontal: Metrics.rfv(10)
};

const marginBottomExtra = {
  marginBottom: Metrics.rfv(20)
};

const itemContainer = {
  backgroundColor: COLORS_NEW.mainBG,
  borderRadius: Metrics.rfv(3),
  paddingLeft: Metrics.rfv(10),
  paddingRight: Metrics.rfv(10)
};

const potItemContainer = {
  borderRadius: Metrics.rfv(3),
  paddingLeft: Metrics.rfv(10),
  paddingRight: Metrics.rfv(10)
};

export const APPLICATION_STYLES = {
  SCREEN_CONTAINER,
  SCREEN_SUB_CONTAINER,
  SCREEN_SUB_CONTAINER_WITHOUT_TOP,
  FLEX_LAYOUT,
  TITLE_TEXT,
  INFO_TEXT,
  SUB_TITLE,
  VIEW_TOP_CONTAINER,
  VIEW_BOTTOM_CONTAINER,
  VIEW_BOTTOM_EXTRA_MARGIN,
  HEADER_TITLE,
  BUTTON_TEXT,
  BUTTON_TOP_MARGIN,
  VIEW_ROW,
  VIEW_TOP_MARGIN_16,
  VIEW_BOTTOM_NEW_CONTAINER,
  TITLE_TEXT_ALIGN,
  VIEW_CONTAINER,
  VIEW_LINE,
  VIEW_TOP_MARGIN_12,
  VIEW_ABSOLUTE_LINE,
  VIEW_TOP_EXTRA_MARGIN,
  TITLE_TEXT_LARGE,

  /**
   * Button styles
   */
  BUTTON_WITH_BACKGROUND,
  BUTTON_WITHOUT_BACKGROUND,
  BUTTON_THIRD_STYLE,
  BUTTON_DISABLE,
  BUTTON_SMALL,

  /**
   * Error messages
   */
  ERROR_MAIN_CONTAINER,
  ERROR_ICON_CONTAINER,
  ERROR_MESSAGE,
  ERROR_TEXT_CONTAINER,
  ERROR_CLOSE_ICON,
  ERROR_DAGNER_ICON,
  BACKGROUND_STYLE,
  BUTTON_CONTAINER,
  TITLE,
  ERROR_STYLE,
  lblTitleStyle,
  lblDescStyle,
  marginBottomExtra,
  itemContainer,
  potItemContainer
};
