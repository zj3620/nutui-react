export type NutCSSVariables =
  | 'nutuiColorPrimary'
  | 'nutuiColorPrimaryStop1'
  | 'nutuiColorPrimaryStop2'
  | 'nutuiColorPrimaryPressed'
  | 'nutuiColorPrimaryDisabled'
  | 'nutuiColorPrimaryLight'
  | 'nutuiColorPrimaryLightPressed'
  | 'nutuiColorDefault'
  | 'nutuiColorDefaultPressed'
  | 'nutuiColorDefaultLight'
  | 'nutuiColorDefaultDisabled'
  | 'nutuiColorSuccess'
  | 'nutuiColorSuccessPressed'
  | 'nutuiColorSuccessDisabled'
  | 'nutuiColorSuccessLight'
  | 'nutuiColorSuccessBackground'
  | 'nutuiColorWarning'
  | 'nutuiColorWarningPressed'
  | 'nutuiColorWarningDisabled'
  | 'nutuiColorWarningLight'
  | 'nutuiColorWarningBackground'
  | 'nutuiColorDanger'
  | 'nutuiColorDangerPressed'
  | 'nutuiColorDangerDisabled'
  | 'nutuiColorDangerLight'
  | 'nutuiColorDangerBackground'
  | 'nutuiGray12'
  | 'nutuiGray0'
  | 'nutuiGray1'
  | 'nutuiWhite12'
  | 'nutuiBlack8'
  | 'nutuiGray3'
  | 'nutuiBlack3'
  | 'nutuiGray4'
  | 'nutuiGray7'
  | 'nutuiGray6'
  | 'nutuiGray5'
  | 'nutuiColorTextDisabled'
  | 'nutuiFontWeight'
  | 'nutuiFontWeightBold'
  | 'nutuiLineHeightBase'
  | 'nutuiSpacing1'
  | 'nutuiSpacing2'
  | 'nutuiSpacing3'
  | 'nutuiSpacing4'
  | 'nutuiSpacing5'
  | 'nutuiSpacing6'
  | 'nutuiSpacing7'
  | 'nutuiSpacing8'
  | 'nutuiRadius1'
  | 'nutuiRadius2'
  | 'nutuiRadius3'
  | 'nutuiRadius4'
  | 'nutuiRadius5'
  | 'nutuiRadius6'
  | 'nutuiGray2'
  | 'nutuiBlack10'
  | 'nutuiBlack2'
  | 'nutuiFontSize1'
  | 'nutuiFontSize2'
  | 'nutuiFontSize3'
  | 'nutuiFontSize4'
  | 'nutuiFontSize5'
  | 'nutuiFontSize6'
  | 'nutuiFontSize8'
  | 'nutuiFontSize10'
  | 'nutuiColorPrimaryText'
  | 'nutuiColorInfo'
  | 'nutuiColorTextLink'
  | 'nutuiPaddingXs'
  | 'nutuiButtonSquareBorderRadius'
  | 'nutuiButtonBorderRadius'
  | 'nutuiButtonBorderWidth'
  | 'nutuiButtonNormalPadding'
  | 'nutuiButtonDefaultHeight'
  | 'nutuiButtonDefaultColor'
  | 'nutuiButtonDefaultBackgroundColor'
  | 'nutuiButtonDefaultBorderColor'
  | 'nutuiButtonDefaultDisabled'
  | 'nutuiButtonDefaultPadding'
  | 'nutuiButtonDefaultFontSize'
  | 'nutuiButtonDefaultFontWeight'
  | 'nutuiButtonLargeWidth'
  | 'nutuiButtonLargeHeight'
  | 'nutuiButtonLargePadding'
  | 'nutuiButtonLargeFontSize'
  | 'nutuiButtonLargeFontWeight'
  | 'nutuiButtonSmallFontSize'
  | 'nutuiButtonSmallPadding'
  | 'nutuiButtonSmallHeight'
  | 'nutuiButtonMiniPadding'
  | 'nutuiButtonMiniHeight'
  | 'nutuiButtonMiniFontSize'
  | 'nutuiButtonPrimaryColor'
  | 'nutuiButtonPrimaryBorderColor'
  | 'nutuiButtonPrimaryDisabled'
  | 'nutuiButtonSuccessColor'
  | 'nutuiButtonSuccessBorderColor'
  | 'nutuiButtonSuccessBackgroundColor'
  | 'nutuiButtonSuccessDisabled'
  | 'nutuiButtonWarningColor'
  | 'nutuiButtonWarningBorderColor'
  | 'nutuiButtonWarningBackgroundColor'
  | 'nutuiButtonWarningDisabled'
  | 'nutuiButtonDangerColor'
  | 'nutuiButtonDangerBorderColor'
  | 'nutuiButtonDangerBackgroundColor'
  | 'nutuiButtonDangerDisabled'
  | 'nutuiButtonTextIconMargin'
  | 'nutuiCellTitleColor'
  | 'nutuiCellTitleFontSize'
  | 'nutuiCellDescriptionFontSize'
  | 'nutuiCellDescriptionColor'
  | 'nutuiCellExtraFontSize'
  | 'nutuiCellExtraColor'
  | 'nutuiCellBorderRadius'
  | 'nutuiCellPadding'
  | 'nutuiCellLineHeight'
  | 'nutuiCellDividerRight'
  | 'nutuiCellDividerLeft'
  | 'nutuiCellDividerBorderBottom'
  | 'nutuiCellBackgroundColor'
  | 'nutuiCellBoxShadow'
  | 'nutuiCellGroupTitlePadding'
  | 'nutuiCellGroupTitleColor'
  | 'nutuiCellGroupTitleFontSize'
  | 'nutuiCellGroupTitleLineHeight'
  | 'nutuiCellGroupDescriptionPadding'
  | 'nutuiCellGroupDescriptionColor'
  | 'nutuiCellGroupDescriptionFontSize'
  | 'nutuiCellGroupDescriptionLineHeight'
  | 'nutuiCellGroupBackgroundColor'
  | 'nutuiDividerMargin'
  | 'nutuiDividerTextFontSize'
  | 'nutuiDividerBorderColor'
  | 'nutuiDividerTextColor'
  | 'nutuiDividerLineHeight'
  | 'nutuiDividerSpacing'
  | 'nutuiDividerSideWidth'
  | 'nutuiDividerVerticalHeight'
  | 'nutuiDividerVerticalTop'
  | 'nutuiDividerVerticalMargin'
  | 'nutuiIconHeight'
  | 'nutuiIconWidth'
  | 'nutuiIconLineHeight'
  | 'nutuiUploaderImageWidth'
  | 'nutuiUploaderImageHeight'
  | 'nutuiUploaderImageBorder'
  | 'nutuiUploaderImageBorderRadius'
  | 'nutuiUploaderBackground'
  | 'nutuiUploaderBackgroundDisabled'
  | 'nutuiUploaderImageColor'
  | 'nutuiUploaderImageDisabled'
  | 'nutuiUploaderImageIconMarginBottom'
  | 'nutuiUploaderImageIconTipFontSize'
  | 'nutuiUploaderPreviewProgressBackground'
  | 'nutuiUploaderPreviewMarginRight'
  | 'nutuiUploaderPreviewMarginBottom'
  | 'nutuiUploaderPreviewTipsHeight'
  | 'nutuiUploaderPreviewTipsBackground'
  | 'nutuiBlack7'
  | 'nutuiUploaderPreviewTipsPadding'
  | 'nutuiUploaderPreviewCloseRight'
  | 'nutuiUploaderPreviewCloseTop'
  | 'nutuiPickerTitleCancelFontSize'
  | 'nutuiPickerTitleOkFontSize'
  | 'nutuiPickerListHeight'
  | 'nutuiPickerItemHeight'
  | 'nutuiPickerItemTextColor'
  | 'nutuiPickerItemTextFontSize'
  | 'nutuiPickerItemActiveLineBorder'
  | 'nutuiWhite7'
  | 'nutuiInputBorderBottom'
  | 'nutuiInputBorderBottomWidth'
  | 'nutuiInputDisabledColor'
  | 'nutuiInputFontSize'
  | 'nutuiInputBorderRadius'
  | 'nutuiInputColor'
  | 'nutuiInputBackgroundColor'
  | 'nutuiInputPadding'
  | 'nutuiTextareaFont'
  | 'nutuiTextareaPadding'
  | 'nutuiTextareaLimitColor'
  | 'nutuiTextareaTextColor'
  | 'nutuiTextareaTextCurrorColor'
  | 'nutuiTextareaTextLineHeight'
  | 'nutuiTextareaDisabledColor'
  | 'nutuiInputnumberInputWidth'
  | 'nutuiInputnumberInputHeight'
  | 'nutuiInputnumberInputBackgroundColor'
  | 'nutuiInputnumberInputFontColor'
  | 'nutuiInputnumberInputFontSize'
  | 'nutuiInputnumberInputBorder'
  | 'nutuiInputnumberInputBorderRadius'
  | 'nutuiInputnumberInputMargin'
  | 'nutuiInputnumberButtonWidth'
  | 'nutuiInputnumberButtonHeight'
  | 'nutuiInputnumberButtonBorderRadius'
  | 'nutuiInputnumberButtonBackgroundColor'
  | 'nutuiInputnumberIconColor'
  | 'nutuiInputnumberIconSize'
  | 'nutuiInputnumberDisabledColor'
  | 'nutuiActionsheetBorderColor'
  | 'nutuiActionsheetItemTextAlign'
  | 'nutuiActionsheetItemBorderBottom'
  | 'nutuiActionsheetItemLineHeight'
  | 'nutuiActionsheetItemColor'
  | 'nutuiActionsheetItemDanger'
  | 'nutuiShortpasswordBackgroundColor'
  | 'nutuiShortpasswordBorderColor'
  | 'nutuiShortpasswordError'
  | 'nutuiShortpasswordForget'
  | 'nutuiNumberkeyboardPadding'
  | 'nutuiNumberkeyboardBackgroundColor'
  | 'nutuiNumberkeyboardWrapperBackgroundColor'
  | 'nutuiNumberkeyboardHeaderClosePadding'
  | 'nutuiNumberkeyboardHeaderCloseColor'
  | 'nutuiNumberkeyboardHeaderCloseFontSize'
  | 'nutuiNumberkeyboardHeaderCloseBackgroundColor'
  | 'nutuiNumberkeyboardKeyBackgroundColor'
  | 'nutuiNumberkeyboardKeyActiveBackgroundColor'
  | 'nutuiNumberkeyboardKeyHeight'
  | 'nutuiNumberkeyboardKeyLineHeight'
  | 'nutuiNumberkeyboardKeyBorderRadius'
  | 'nutuiNumberkeyboardKeyBorder'
  | 'nutuiNumberkeyboardKeyFontSize'
  | 'nutuiNumberkeyboardKeyFontColor'
  | 'nutuiNumberkeyboardKeyConfirmFontSize'
  | 'nutuiNumberkeyboardKeyConfirmFontColor'
  | 'nutuiNumberkeyboardKeyConfirmBackgroundColor'
  | 'nutuiCountdownDisplay'
  | 'nutuiCountdownColor'
  | 'nutuiCountdownFontSize'
  | 'nutuiPriceSymbolPaddingRight'
  | 'nutuiPriceSymbolBigSize'
  | 'nutuiPriceIntegerBigSize'
  | 'nutuiPriceDecimalBigSize'
  | 'nutuiPriceLineColor'
  | 'nutuiPriceLineFontSize'
  | 'nutuiPriceSymbolMediumSize'
  | 'nutuiPriceIntegerMediumSize'
  | 'nutuiPriceDecimalMediumSize'
  | 'nutuiPriceSymbolSmallSize'
  | 'nutuiPriceIntegerSmallSize'
  | 'nutuiPriceDecimalSmallSize'
  | 'nutuiAvatarSquare'
  | 'nutuiAvatarLargeWidth'
  | 'nutuiAvatarLargeHeight'
  | 'nutuiAvatarSmallWidth'
  | 'nutuiAvatarSmallHeight'
  | 'nutuiAvatarNormalWidth'
  | 'nutuiAvatarNormalHeight'
  | 'nutuiSwitchCloseBackgroundColor'
  | 'nutuiSwitchOpenBackgroundColor'
  | 'nutuiSwitchCloseDisabledBackgroundColor'
  | 'nutuiSwitchOpenDisabledBackgroundColor'
  | 'nutuiSwitchCloseLineBgColor'
  | 'nutuiSwitchWidth'
  | 'nutuiSwitchHeight'
  | 'nutuiSwitchLineHeight'
  | 'nutuiSwitchBorderRadius'
  | 'nutuiSwitchInsideWidth'
  | 'nutuiSwitchInsideHeight'
  | 'nutuiSwitchInsideOpenTransform'
  | 'nutuiSwitchInsideCloseTransform'
  | 'nutuiSwitchBoxShadow'
  | 'nutuiToastTitleFontSize'
  | 'nutuiToastTextFontSize'
  | 'nutuiToastFontColor'
  | 'nutuiToastInnerPadding'
  | 'nutuiToastInnerBgColor'
  | 'nutuiToastInnerBorderRadius'
  | 'nutuiToastInnerTop'
  | 'nutuiTourMaskBorderRadius'
  | 'nutuiTourContentMinWidth'
  | 'nutuiTourContentPadding'
  | 'nutuiTourContentInnerMargin'
  | 'nutuiTourContentInnerFontSize'
  | 'nutuiTourContentBottomMarginTop'
  | 'nutuiTourContentBottomBtnMarginLeft'
  | 'nutuiTourContentBottomBtnPadding'
  | 'nutuiTourContentBottomBtnFontSize'
  | 'nutuiTourContentBottomBtnBorderRadius'
  | 'nutuiBacktopBorderColor'
  | 'nutuiCalendarChooseBackgroundColor'
  | 'nutuiCalendarChooseBackgroundColorDisabled'
  | 'nutuiCalendarBaseFontSize'
  | 'nutuiCalendarTitleFontSize'
  | 'nutuiCalendarTitleFontWeight'
  | 'nutuiCalendarSubTitleFontSize'
  | 'nutuiCalendarHeaderHeight'
  | 'nutuiCalendarDayWidth'
  | 'nutuiCalendarDayHeight'
  | 'nutuiCalendarDayFontWeight'
  | 'nutuiCalendarDayActiveBorderRadius'
  | 'nutuiOverlayBgColor'
  | 'nutuiOverlayZIndex'
  | 'nutuiOverlayContentBgColor'
  | 'nutuiOverlayContentColor'
  | 'nutuiOverlayAnimationDuration'
  | 'nutuiPopupBorderRadius'
  | 'nutuiPopupIconSize'
  | 'nutuiPopupTitlePadding'
  | 'nutuiPopupTitleFontSize'
  | 'nutuiPopupTitleHeight'
  | 'nutuiPopupTitleBorderBottom'
  | 'nutuiPopupAnimationDuration'
  | 'nutuiNotifyTextColor'
  | 'nutuiNotifyPadding'
  | 'nutuiNotifyFontSize'
  | 'nutuiNotifyHeight'
  | 'nutuiNotifyBaseBackgroundColor'
  | 'nutuiNotifyPrimaryBackgroundColor'
  | 'nutuiNotifySuccessBackgroundColor'
  | 'nutuiNotifyDangerBackgroundColor'
  | 'nutuiNotifyWarningBackgroundColor'
  | 'nutuiRateItemMargin'
  | 'nutuiRateIconColor'
  | 'nutuiRateIconInactiveColor'
  | 'nutuiTabbarHeight'
  | 'nutuiTabbarActiveColor'
  | 'nutuiTabbarInactiveColor'
  | 'nutuiTabbarBorderTop'
  | 'nutuiTabbarBorderBottom'
  | 'nutuiTabbarBoxShadow'
  | 'nutuiTabbarTextFontSize'
  | 'nutuiTabbarTextLargeFontSize'
  | 'nutuiTabbarTextLargeFontWeight'
  | 'nutuiTabbarTextLineHeight'
  | 'nutuiTabbarTextMarginTop'
  | 'nutuiPulltorefreshTopIconWidth'
  | 'nutuiPulltorefreshTopIconHeight'
  | 'nutuiInfiniteloadingColor'
  | 'nutuiInfiniteloadingBottomIconSize'
  | 'nutuiRangeColor'
  | 'nutuiRangeHeight'
  | 'nutuiRangeMargin'
  | 'nutuiRangeInactiveColor'
  | 'nutuiRangeActiveColor'
  | 'nutuiRangeButtonBackground'
  | 'nutuiRangeButtonWidth'
  | 'nutuiRangeButtonHeight'
  | 'nutuiRangeButtonBorder'
  | 'nutuiSwiperIndicatorBottom'
  | 'nutuiStepsBaseIconWidth'
  | 'nutuiStepsBaseIconHeight'
  | 'nutuiStepsBaseIconLineHeight'
  | 'nutuiStepsBaseIconMarginBottom'
  | 'nutuiStepsBaseIconFontSize'
  | 'nutuiStepsBaseLineWidth'
  | 'nutuiStepsBaseLineHeight'
  | 'nutuiStepsBaseLineBackground'
  | 'nutuiStepsBaseTitleFontSize'
  | 'nutuiStepsBaseTitleColor'
  | 'nutuiStepsBaseTitleMarginBottom'
  | 'nutuiStepsBaseDescriptionFontSize'
  | 'nutuiStepsBaseDescriptionColor'
  | 'nutuiStepsWaitIconBgColor'
  | 'nutuiStepsWaitIconColor'
  | 'nutuiStepsWaitTitleColor'
  | 'nutuiStepsWaitDescriptionColor'
  | 'nutuiStepsProcessIconBgColor'
  | 'nutuiStepsProcessIconColor'
  | 'nutuiStepsProcessTitleColor'
  | 'nutuiStepsProcessTitleFontSize'
  | 'nutuiStepsProcessTitleFontWeight'
  | 'nutuiStepsProcessDescriptionColor'
  | 'nutuiStepsFinishIconBgColor'
  | 'nutuiStepsFinishIconColor'
  | 'nutuiStepsFinishTitleColor'
  | 'nutuiStepsFinishDescriptionColor'
  | 'nutuiStepsFinishLineBackground'
  | 'nutuiStepsDotIconWidth'
  | 'nutuiStepsDotIconHeight'
  | 'nutuiStepsDotIconBorder'
  | 'nutuiStepsDotHeadMargin'
  | 'nutuiDialogZIndex'
  | 'nutuiDialogWidth'
  | 'nutuiDialogPadding'
  | 'nutuiDialogMinHeight'
  | 'nutuiDialogBorderRadius'
  | 'nutuiDialogFooterJustifyContent'
  | 'nutuiDialogContentMargin'
  | 'nutuiDialogContentMaxHeight'
  | 'nutuiDialogContentLineHeight'
  | 'nutuiDialogContentTextAlign'
  | 'nutuiDialogFooterButtonMinWidth'
  | 'nutuiDialogFooterCancelMarginRight'
  | 'nutuiDialogFooterOkMaxWidth'
  | 'nutuiCheckboxLabelMarginLeft'
  | 'nutuiCheckboxLabelColor'
  | 'nutuiCheckboxLabelFontSize'
  | 'nutuiCheckboxIconFontSize'
  | 'nutuiRadioIconFontSize'
  | 'nutuiRadioLabelFontSize'
  | 'nutuiRadioLabelColor'
  | 'nutuiRadioLabelMarginLeft'
  | 'nutuiRadioButtonFontSize'
  | 'nutuiRadioButtonPadding'
  | 'nutuiRadioButtonBorderRadius'
  | 'nutuiRadioButtonDisabledActiveColor'
  | 'nutuiRadiogroupRadioMargin'
  | 'nutuiRadiogroupRadioLabelMargin'
  | 'nutuiSignatureBorderColor'
  | 'nutuiSignatureBorderWidth'
  | 'nutuiSignatureHeight'
  | 'nutuiSignatureBackgroundColor'
  | 'nutuiSignatureFontSize'
  | 'nutuiFixednavBackgroundColor'
  | 'nutuiFixednavColor'
  | 'nutuiFixednavIndex'
  | 'nutuiFixednavButtonBackground'
  | 'nutuiFixednavItemActiveColor'
  | 'nutuiNoticebarHeight'
  | 'nutuiNoticebarBackground'
  | 'nutuiNoticebarColor'
  | 'nutuiNoticebarFontSize'
  | 'nutuiNoticebarLineHeight'
  | 'nutuiNoticebarBoxPadding'
  | 'nutuiNoticebarWrapablePadding'
  | 'nutuiNoticebarIconGap'
  | 'nutuiNoticebarLeftIconWidth'
  | 'nutuiNoticebarRightIconWidth'
  | 'nutuiTimeselectDateWidth'
  | 'nutuiTimeselectDateHeight'
  | 'nutuiTimeselectDateActiveColor'
  | 'nutuiTimeselectTimeWidth'
  | 'nutuiTimeselectTimeHeight'
  | 'nutuiTimeselectTimeMargin'
  | 'nutuiTimeselectTimeBackground'
  | 'nutuiTagPadding'
  | 'nutuiTagFontSize'
  | 'nutuiTagBorderRadius'
  | 'nutuiTagHeight'
  | 'nutuiTagColor'
  | 'nutuiTagBorderWidth'
  | 'nutuiTagBackgroundColor'
  | 'nutuiTagPrimaryBackgroundColor'
  | 'nutuiTagInfoBackgroundColor'
  | 'nutuiTagSuccessBackgroundColor'
  | 'nutuiTagDangerBackgroundColor'
  | 'nutuiTagWarningBackgroundColor'
  | 'nutuiTagRoundBorderRadius'
  | 'nutuiTagMarkBorderRadius'
  | 'nutuiBadgeHeight'
  | 'nutuiBadgeBackgroundColor'
  | 'nutuiBadgeColor'
  | 'nutuiBadgeFontSize'
  | 'nutuiBadgeBorder'
  | 'nutuiBadgeBorderRadius'
  | 'nutuiBadgeMinWidth'
  | 'nutuiBadgePadding'
  | 'nutuiBadgeIconPadding'
  | 'nutuiBadgeContentTransform'
  | 'nutuiBadgeZIndex'
  | 'nutuiBadgeDotWidth'
  | 'nutuiPopoverBorderRadius'
  | 'nutuiPopoverFontSize'
  | 'nutuiPopoverBorderColor'
  | 'nutuiPopoverContentBackgroundColor'
  | 'nutuiPopoverTextColor'
  | 'nutuiPopoverDisableColor'
  | 'nutuiPopoverDividerColor'
  | 'nutuiPopoverMenuItemPadding'
  | 'nutuiProgressHeight'
  | 'nutuiProgressColor'
  | 'nutuiProgressBackground'
  | 'nutuiProgressBorderRadius'
  | 'nutuiProgressTextColor'
  | 'nutuiProgressTextBackground'
  | 'nutuiProgressTextPadding'
  | 'nutuiProgressTextFontSize'
  | 'nutuiProgressTextPositionTop'
  | 'nutuiProgressTextPositionBottom'
  | 'nutuiProgressTextBorderRadius'
  | 'nutuiPaginationColor'
  | 'nutuiPaginationFontSize'
  | 'nutuiPaginationItemBorderColor'
  | 'nutuiPaginationDisableColor'
  | 'nutuiPaginationDisableBackgroundColor'
  | 'nutuiPaginationItemBorderWidth'
  | 'nutuiPaginationItemBorderRadius'
  | 'nutuiPaginationPrevNextPadding'
  | 'nutuiPaginationLiteWidth'
  | 'nutuiPaginationLiteHeight'
  | 'nutuiPaginationLiteRadius'
  | 'nutuiPaginationLiteBackgroundColor'
  | 'nutuiPaginationLiteActiveBackgroundColor'
  | 'nutuiBlack5'
  | 'nutuiTabsTitlesHeight'
  | 'nutuiTabsTitlesBackgroundColor'
  | 'nutuiTabsTitlesGap'
  | 'nutuiTabsTitlesFontSize'
  | 'nutuiTabsTitlesItemMinWidth'
  | 'nutuiTabsTitlesItemActiveColor'
  | 'nutuiTabsTitlesItemActiveFontWeight'
  | 'nutuiTabsTitlesItemActiveFontSize'
  | 'nutuiTabsTitlesItemActiveBackgroundColor'
  | 'nutuiTabsTabLineWidth'
  | 'nutuiTabsTabLineHeight'
  | 'nutuiTabsTabLineColor'
  | 'nutuiTabsLineBottom'
  | 'nutuiTabsLineBorderRadius'
  | 'nutuiTabsTabLineOpacity'
  | 'nutuiTabsVerticalTitlesWidth'
  | 'nutuiTabsVerticalTitlesItemHeight'
  | 'nutuiTabsVerticalTabLineColor'
  | 'nutuiTabsVerticalTabLineWidth'
  | 'nutuiTabsVerticalTabLineHeight'
  | 'nutuiIndicatorColor'
  | 'nutuiIndicatorDotColor'
  | 'nutuiIndicatorDotSize'
  | 'nutuiIndicatorDotActiveSize'
  | 'nutuiIndicatorBorderRadiusSize'
  | 'nutuiIndicatorDotMargin'
  | 'nutuiMenuScrollFixedTop'
  | 'nutuiMenuScrollFixedZIndex'
  | 'nutuiMenuBarLineHeight'
  | 'nutuiMenuBarBoxShadow'
  | 'nutuiMenuBarOpenedZIndex'
  | 'nutuiMenuTitlePadding'
  | 'nutuiMenuTitleFontSize'
  | 'nutuiMenuTitleColor'
  | 'nutuiMenuContainerZIndex'
  | 'nutuiMenuContentPadding'
  | 'nutuiMenuContentMaxHeight'
  | 'nutuiMenuContentBackgroundColor'
  | 'nutuiMenuItemActiveColor'
  | 'nutuiMenuItemActiveFontWeight'
  | 'nutuiMenuItemDisabledColor'
  | 'nutuiMenuItemPadding'
  | 'nutuiMenuItemIconMargin'
  | 'nutuiCollapseItemPadding'
  | 'nutuiCollapseItemColor'
  | 'nutuiCollapseItemDisabledColor'
  | 'nutuiCollapseItemFontSize'
  | 'nutuiCollapseItemLineHeight'
  | 'nutuiCollapseItemExtraColor'
  | 'nutuiCollapseWrapperContentPadding'
  | 'nutuiCollapseWrapperContentColor'
  | 'nutuiCollapseWrapperContentFontSize'
  | 'nutuiCollapseWrapperContentLineHeight'
  | 'nutuiCollapseWrapperContentBackgroundColor'
  | 'nutuiSearchbarWidth'
  | 'nutuiSearchbarPadding'
  | 'nutuiSearchbarBackground'
  | 'nutuiSearchbarColor'
  | 'nutuiSearchbarGap'
  | 'nutuiSearchbarFontSize'
  | 'nutuiSearchbarContentPadding'
  | 'nutuiSearchbarContentBackground'
  | 'nutuiSearchbarContentBorderRadius'
  | 'nutuiSearchbarContentRoundBorderRadius'
  | 'nutuiSearchbarInputHeight'
  | 'nutuiSearchbarInputPadding'
  | 'nutuiSearchbarInputTextColor'
  | 'nutuiSearchbarInputCurrorColor'
  | 'nutuiSearchbarInputTextAlign'
  | 'nutuiEmptyPadding'
  | 'nutuiEmptyImageSize'
  | 'nutuiEmptyImageSmallSize'
  | 'nutuiEmptyTitleMarginTop'
  | 'nutuiEmptyTitleMarginBottom'
  | 'nutuiEmptyTitleLineHeight'
  | 'nutuiEmptyDescriptionMarginTop'
  | 'nutuiEmptyDescriptionLineHeight'
  | 'nutuiCascaderFontSize'
  | 'nutuiCascaderPaneHeight'
  | 'nutuiCascaderPanePaddingTop'
  | 'nutuiCascaderIconChecklistMarginLeft'
  | 'nutuiCascaderTabsItemPadding'
  | 'nutuiCascaderBarPadding'
  | 'nutuiCascaderBarFontSize'
  | 'nutuiCascaderBarLineHeight'
  | 'nutuiCascaderBarColor'
  | 'nutuiCascaderItemHeight'
  | 'nutuiCascaderItemPadding'
  | 'nutuiCascaderItemMargin'
  | 'nutuiCascaderItemBorderBottom'
  | 'nutuiCascaderItemColor'
  | 'nutuiCascaderItemFontSize'
  | 'nutuiCascaderItemActiveColor'
  | 'nutuiFormItemErrorLineColor'
  | 'nutuiFormItemRequiredColor'
  | 'nutuiFormItemErrorMessageColor'
  | 'nutuiFormItemLabelFontSize'
  | 'nutuiFormItemLabelWidth'
  | 'nutuiFormItemLabelMarginRight'
  | 'nutuiFormItemLabelTextAlign'
  | 'nutuiFormItemRequiredMarginRight'
  | 'nutuiFormItemBodyFontSize'
  | 'nutuiFormItemBodySlotsTextAlign'
  | 'nutuiFormItemBodyInputTextAlign'
  | 'nutuiFormItemTipFontSize'
  | 'nutuiFormItemTipTextAlign'
  | 'nutuiSkeletonBackground'
  | 'nutuiSkeletonLineWidth'
  | 'nutuiSkeletonLineHeight'
  | 'nutuiSkeletonLineBorderRadius'
  | 'nutuiCardLeftBorderRadius'
  | 'nutuiCardBackgroundColor'
  | 'nutuiGridBorderColor'
  | 'nutuiGridItemContentPadding'
  | 'nutuiGridItemContentBgColor'
  | 'nutuiGridItemTextMargin'
  | 'nutuiGridItemTextColor'
  | 'nutuiGridItemTextFontSize'
  | 'nutuiTableBorderColor'
  | 'nutuiTableColsPadding'
  | 'nutuiTableTrEvenBgColor'
  | 'nutuiTableTrOddBgColor'
  | 'nutuiNavbarWidth'
  | 'nutuiNavbarHeight'
  | 'nutuiNavbarMarginBottom'
  | 'nutuiNavbarBackground'
  | 'nutuiNavbarBoxShadow'
  | 'nutuiNavbarColor'
  | 'nutuiNavbarFontSize'
  | 'nutuiNavbarTitleFontSize'
  | 'nutuiNavbarTitleFontWeight'
  | 'nutuiNavbarTitleFontColor'
  | 'nutuiSidenavbarContentBgColor'
  | 'nutuiSidenavbarItemHeight'
  | 'nutuiSidenavbarTitlePadding'
  | 'nutuiSidenavbarTitleBackground'
  | 'nutuiSidenavbarTitleColor'
  | 'nutuiSidenavbarSubTitlePadding'
  | 'nutuiSidenavbarSubTitleBackground'
  | 'nutuiSidenavbarSubTitleColor'
  | 'nutuiSidenavbarSubItemColor'
  | 'nutuiSidenavbarSubItemPadding'
  | 'nutuiSidenavbarSubListBackground'
  | 'nutuiElevatorListBgColor'
  | 'nutuiElevatorListFontSize'
  | 'nutuiElevatorListColor'
  | 'nutuiElevatorListItemPadding'
  | 'nutuiElevatorListItemNameHeight'
  | 'nutuiElevatorListItemNameLineHeight'
  | 'nutuiElevatorListItemCodeFontSize'
  | 'nutuiElevatorListItemCodeColor'
  | 'nutuiElevatorListItemCodeFontWeight'
  | 'nutuiElevatorListItemCodeHeight'
  | 'nutuiElevatorListItemCodeLineHeight'
  | 'nutuiElevatorListItemCodeBorderBottom'
  | 'nutuiElevatorListItemCodeBackgroundColor'
  | 'nutuiElevatorListItemCodeCurrentBgColor'
  | 'nutuiElevatorListItemCodeCurrentBorderRadius'
  | 'nutuiElevatorListItemCodeCurrentWidth'
  | 'nutuiElevatorListItemCodeCurrentHeight'
  | 'nutuiElevatorListItemCodeCurrentLineHeight'
  | 'nutuiElevatorListItemCodeCurrentRight'
  | 'nutuiElevatorListItemCodeCurrentTop'
  | 'nutuiElevatorListItemCodeCurrentTextAlign'
  | 'nutuiElevatorBarsRight'
  | 'nutuiElevatorBarsTop'
  | 'nutuiElevatorBarsTransform'
  | 'nutuiElevatorBarsPadding'
  | 'nutuiElevatorBarsBackgroundColor'
  | 'nutuiElevatorBarsBorderRadius'
  | 'nutuiElevatorBarsZIndex'
  | 'nutuiElevatorBarsInnerItemPadding'
  | 'nutuiElevatorBarsFontSize'
  | 'nutuiElevatorBarsActiveColor'
  | 'nutuiElevatorListFixedColor'
  | 'nutuiElevatorListFixedBgColor'
  | 'nutuiElevatorListFixedBoxShadow'
  | 'nutuiListItemMargin'
  | 'nutuiAddresslistBg'
  | 'nutuiAddresslistBorder'
  | 'nutuiAddresslistFontColor'
  | 'nutuiAddresslistFontSize'
  | 'nutuiAddresslistMaskBg'
  | 'nutuiAddresslistAddrFontColor'
  | 'nutuiAddresslistAddrFontSize'
  | 'nutuiAddresslistSetBg'
  | 'nutuiAddresslistDelBg'
  | 'nutuiAddresslistContntsContactDefault'
  | 'nutuiAddresslistContntsContactColor'
  | 'nutuiCircleprogressPrimaryColor'
  | 'nutuiCircleprogressPathColor'
  | 'nutuiCircleprogressTextColor'
  | 'nutuiCircleprogressTextSize'
  | 'nutuiEllipsisExpandCollapseColor'
  | 'nutuiWatermarkZIndex'
  | 'nutuiTrendarrowFontSize'
  | 'nutuiTrendarrowIconMargin'
  | 'nutuiCountupWidth'
  | 'nutuiCountupHeight'
  | 'nutuiCountupBaseSize'
  | 'nutuiCountupBorderRadius'
  | 'nutuiCountupLrMargin'
  | 'nutuiCountupBgColor'
  | 'nutuiCountupColor'
  | 'nutuiColDefaultMarginBottom'
  | 'nutuiSpaceGap'
  | 'nutuiLoadingIconColor'
  | 'nutuiLoadingIconSize'
  | 'nutuiLoadingColor'
  | 'nutuiLoadingFontSize'
  | 'nutuiWhite1'
  | 'nutuiWhite8'
  | 'nutuiBrand4'
  | 'nutuiBrand3'
  | 'nutuiBlack1'
  | 'nutuiLoadingTextColor'
  | 'nutuiLoadingTextSize'
  | 'nutuiSafeAreaMultiple'
