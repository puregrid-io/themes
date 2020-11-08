export const auroraTheme = {
  /**
   * The background of the cells in a selection.
   */
  selectionBg: 'rgb(236 244 255)',
  /**
   * The text color of selected cells.
   */
  selectionTextColor: '',
  /**
   * The background that flashes for a moment to indicate the cells have been copied
   * to clipboard.
   */
  selectionCopiedBg: 'rgb(218 233 255)',
  /**
   * The color of icons such as those used for dragging and sorting.
   */
  iconColor: 'rgb(70, 88, 111)',
  /**
   * The grid radius of the top two corners.
   */
  gridRadius: '4px',

  /**
   * The padding of header cells.
   */
  headerCellPadding: '10px',
  /**
   * The BG of header cells. Should be set so that the body cells "slide" underneath.
   */
  headerCellBg: 'rgb(241, 244, 248)',
  /**
   * The header part of the grid border including around cells.
   */
  headerBorderColor: 'rgb(191, 196, 208)',
  /**
   * The background of the directional icon that indicates which side of a column the
   * dragged one will move to when released.
   */
  headerReorderIconBg: 'rgba(213, 219, 226, 0.9)',
  /**
   * The color of text in the header.
   * Set to null to inherit from your page.
   */
  headerTextColor: 'rgb(87, 96, 109)',

  /**
   * The BG of the resize area when hovered.
   */
  colResizeHoverBg: 'rgba(0, 0, 0, 0.08)',
  /**
   * The color of the resize grid icon.
   */
  colResizeIconColor: 'rgba(0, 0, 0, 0.3)',
  /**
   * The color of the vertical line which indicates how wide the column will be when
   * released.
   */
  colResizerMarker: 'rgb(0, 65, 228)',

  /**
   * The padding of a column filter cell.
   */
  filterCellPadding: '10px',
  /**
   * The BG of a column filter cell.
   */
  filterCellBg: 'rgb(232, 237, 242)',
  /**
   * The border color fo a column filter cell.
   */
  filterBorderColor: 'rgb(191, 196, 208)',
  /**
   * The color of text in the column filter row.
   */
  filterTextColor: 'rgb(87, 96, 109)',

  /**
   * The padding of grid cells. If you use `virtualRows` it's recommended you only set
   * the horizontal padding e.g. `0 10px` as the height will be fixed and the content
   * already vertically centered.
   */
  bodyCellPadding: '10px',
  /**
   * The BG of all grid cells.
   */
  bodyCellBg: 'white',
  /**
   * The even (alternating) BG of grid cells.
   * Set to null if you don't want it.
   */
  bodyCellAltBg: null,
  /**
   * The hover BG of grid cells.
   */
  bodyCellHoverBg: 'rgb(246 248 250)',
  /**
   * The border color for the outer parts of the body area.
   */
  bodyBorderColor: 'rgb(191 196 208)',
  /**
   * The border color for the inner parts of the body area.
   * Set to 'transparent' if you don't want it.
   */
  cellBorderColor: 'rgb(191 196 208)',
  /**
   * The text color for the body area.
   * Set to null to inherit from your page.
   */
  bodyTextColor: 'rgb(90 98 112)',

  /**
   * Background of the footer area.
   */
  footerBg: null,
  /**
   * Text color of the footer area.
   */
  footerTextColor: null,
  /**
   * Footer container padding.
   */
  footerPadding: '10px 0',

  /**
   * The radius of buttons and inputs.
   */
  controlRadius: '6px',

  /**
   * The BG of buttons.
   */
  buttonBg: 'transparent',
  /**
   * The active BG of buttons.
   */
  buttonBgActive: 'rgb(235 236 240)',
  /**
   * The text and icon color in buttons.
   */
  buttonTextColor: null,
  /**
   * The border for buttons.
   */
  buttonBorder: '1px solid transparent',
  /**
   * The padding for buttons.
   */
  buttonPadding: '8px',

  /**
   * BG of inputs.
   */
  inputBg: 'rgb(227 228 232)',
  /**
   * Text color of inputs.
   */
  inputTextColor: null,

  /**
   * The background of the loading overlay that covers the body of the Grid when
   * `loading={true}` is passed in.
  */
  loadingBg: 'rgba(255, 255, 255, 0.3)',
};
