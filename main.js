/*! UPDATE TIME: 2022/8/1 16:42:49 */
System.register(['@angular/core', 'tslib', '@angular/platform-browser', '@angular/common', '@farris/ui-notify', '@farris/ide-code-view',
 '@farris/designer-devkit', '@farris/designer-services', '@farris/mobile-designer-ui', '@farris/designer-element', '@farris/ui-messager', 
 '@angular/common/http', 'lodash-es', '@gsp-bef/gsp-cm-metadata', '@farris/ui-modal', 'resize-observer-polyfill', 'rxjs', '@gsp-lcm/metadata-selector',
  '@farris/ui-loading', '@farris/ui-datagrid-editors', 'rxjs/operators', '@angular/forms', '@farris/ide-devkit', '@farris/ide-property-panel', 
  '@farris/ui-splitter', '@farris/ui-switch', '@farris/ui-area-response', '@farris/ui-draggable', '@farris/ui-treetable', '@farris/ui-tabs', 
  '@farris/ui-datagrid', '@farris/ui-popover/farris-ui-popover.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory',
   '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory',
    '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@progress/kendo-angular-popup.ngfactory', 
    '@progress/kendo-angular-grid.ngfactory', '@gsp-lcm/metadata-selector/gsp-lcm-metadata-selector.ngfactory',
     '@gsp-lcm/metadatart-selector/gsp-lcm-metadatart-selector.ngfactory', '@farris/events-editor/farris-events-editor.ngfactory',
      '@farris/ide-property-panel/farris-ide-property-panel.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', 
      '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory',
       '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory',
        '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-enum-editor/farris-ui-enum-editor.ngfactory',
         '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory',
          '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', 
          'ngx-contextmenu/ngx-contextmenu.ngfactory', '@farris/designer-devkit/farris-designer-devkit.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory',
           '@gsp-svc/expression/gsp-svc-expression.ngfactory', '@progress/kendo-angular-dialog.ngfactory', 
           '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', 
           '@farris/response-layout-editor/farris-response-layout-editor.ngfactory', '@farris/header-group-editor/farris-header-group-editor.ngfactory',
            '@farris/mobile-designer-ui/farris-mobile-designer-ui.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', 
            '@farris/ui-switch/farris-ui-switch.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@farris/ui-common/events', '@farris/ui-common',
             '@farris/ui-common/column', '@farris/ide-code-view/farris-ide-code-view.ngfactory', '@angular/animations/browser',
              '@angular/platform-browser/animations', '@farris/ui-locale', '@farris/ui-popover', '@farris/ui-modal/positioning', 
              '@farris/ui-modal/component-loader', '@farris/ui-common/date', '@farris/ui-combo-list', '@farris/ui-tooltip', '@progress/kendo-angular-intl',
               '@progress/kendo-angular-dateinputs', '@progress/kendo-angular-popup', '@progress/kendo-angular-resize-sensor', '@gsp-lcm/metadatart-selector',
                '@farris/ui-common/number', '@farris/ui-pagination', '@farris/ui-context-menu', '@farris/ui-dialog', '@farris/ui-filter-condition',
                 '@farris/ui-filter', '@angular/cdk/overlay', '@angular/cdk/bidi', '@angular/animations', '@gsp-svc/expression', '@progress/kendo-angular-dialog',
                  'ngx-contextmenu', '@angular/cdk/drag-drop', '@angular/cdk/scrolling', '@farris/ui-perfect-scrollbar', '@farris/ui-time-picker', '@farris/ui-datepicker', '@farris/ui-input-group', '@farris/ui-datalist', '@farris/ui-number-spinner', '@farris/ui-dropdown', '@farris/property-editor', '@progress/kendo-angular-treeview', '@progress/kendo-angular-grid', '@progress/kendo-angular-inputs', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-layout', '@farris/events-editor', '@farris/ui-layout', '@farris/ui-datatable', '@farris/ui-lookup', '@farris/ui-combo-lookup', '@farris/ui-language-textbox', '@farris/ui-enum-editor', '@farris/ui-forms', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-filter-panel', '@farris/ui-sidebar', '@angular/cdk/portal', '@angular/cdk/platform', '@farris/ui-progress-step', '@gsp-sys/rtf-production-help', '@progress/kendo-angular-buttons', '@farris/ui-datagrid-filter', '@farris/extend-page-modal', '@farris/ui-rate', '@farris/response-layout-editor', '@farris/header-group-editor', '@farris/ui-multi-select'], function() {
    'use strict';
    var Injectable, defineInjectable, inject, Component, NgZone, ViewChild, ComponentFactoryResolver, Injector, ElementRef, INJECTOR, Output, EventEmitter, ViewEncapsulation, Input, TemplateRef, NgModule, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ɵqud, ɵnov, ɵprd, ChangeDetectorRef, ApplicationRef, Renderer2, ɵted, ɵand, ViewContainerRef, ɵEMPTY_MAP, ɵcmf, ɵmod, ɵmpd, ɵCodegenComponentFactoryResolver, NgModuleRef, LOCALE_ID, ɵangular_packages_core_core_s, Compiler, APP_ID, ɵangular_packages_core_core_h, IterableDiffers, ɵangular_packages_core_core_q, KeyValueDiffers, ɵangular_packages_core_core_r, Sanitizer, PLATFORM_ID, ɵConsole, RendererFactory2, Testability, ErrorHandler, APP_INITIALIZER, NgProbeToken, ApplicationInitStatus, ApplicationModule, ɵAPP_ROOT, __extends, __decorate, __metadata, __rest, BrowserModule, DomSanitizer, ɵDomSanitizerImpl, HAMMER_GESTURE_CONFIG, HammerGestureConfig, EVENT_MANAGER_PLUGINS, ɵDomEventsPlugin, ɵKeyEventsPlugin, ɵHammerGesturesPlugin, HAMMER_LOADER, EventManager, ɵDomSharedStylesHost, ɵDomRendererFactory2, ɵSharedStylesHost, DOCUMENT$1, ɵangular_packages_platform_browser_platform_browser_a, ɵangular_packages_platform_browser_platform_browser_j, platformBrowser, CommonModule, NgIf, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, DOCUMENT, Location, NotifyService, NotifyModule, CodeViewComponent, IdeCodeViewModule, ɵa, ContextService, ɵe, ɵb$2, ɵc$1, ɵd$2, ɵn$1, ɵl, ɵo, ɵm$2, IDE_CODE_VIEW_CONFIGER, ɵx, ɵt, ɵy, ɵbc, ɵbf, ɵbi, IDE_CODE_VIEW_CONFIG, ControlTreeNodeType, ControlTreeComponent, ControlBoxComponent, SchemaTreeComponent, DragResolveService, UpdateFormSchemaService, ItemCollectionEditorComponent, PublishMenuComponent, FormSaveAsComponent, FarrisDesignerDevkitModule, ɵp, ɵm, ɵk, ɵn, ɵg, ɵh, ɵb, ɵi, IDEPublishMenuModule, ɵs, GridFieldDataType, FormSchemaEntityFieldType$Type, FormBindingType, DomService, DesignViewModelService, RefreshFormService, FormBasicService, FormSchemaEntityFieldTypeName, FormVariableCategory, SchemaService, StateMachineService, DataStatesService, DesignerHostSettingService, WebCmdService, DesignerEnvType, DgControl, ControlService, AllComponents, FarrisMobileDesignerUIModule, IDesignerHost, MessagerService, MessagerModule, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, HttpClient, HttpHeaders, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, HttpClientXsrfModule, HttpClientModule, set, cloneDeep, omit, get, merge, GSPElementDataType, GSPElementObjectType, CmElementConst, EnumIndexType$1, GSPElementDataTypes, BsModalService, ModalModule, ResizeObserver, Subject, of, GSPMetadataService, GSPMetadataServiceModule, ɵa$1, ɵd, MetadataSelectModule, LoadingService, LoadingModule, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, EditorTypes, DatagridEditorsModule, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$3, ɵb$3, ɵc$2, ɵd$3, ɵe$1, ɵf, ɵg$1, ɵh$1, ɵi$1, ɵj$1, ɵk$1, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, tap, switchMap, map, FormsModule, NG_VALUE_ACCESSOR, NgModel, NgControl, NgControlStatus, ɵangular_packages_forms_forms_j, FormBuilder, ɵangular_packages_forms_forms_bc, ReactiveFormsModule, CacheService, GSP, HttpService, CacheLocalStorage, CacheMemoryStorage, CacheSessionStorage, CacheModule, GSPHttpModule, PropertyPanelModule, PropertyPanelComponent, SplitterModule, SplitterComponent, SplitterPaneComponent, SwitchModule, SwitchComponent, SWITCH_OPTIONS, FAreaResponseModule, FAreaResponseDirective, AngularDraggableModule, AngularResizableDirective, TreeTableModule, TreeTableComponent, TreetableService, TTHotkeys, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, DatagridComponent, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ValidatorMessagerService, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_FILTER_ROW, GRID_EDITORS, PopoverContainerComponentNgFactory, NotifyContainerComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, LoadingComponentNgFactory, TooltipComponentNgFactory, PopupComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, SelectMetadataComponentNgFactory, ɵbNgFactory, SelectMetadataRTComponentNgFactory, ViewModelComponentNgFactory, View_PropertyPanelComponent_0, RenderType_PropertyPanelComponent, PropertyPanelComponentNgFactory, TextboxPropertyComponentNgFactory, NumberPropertyComponentNgFactory, CombolistPropertyComponentNgFactory, DatePropertyComponentNgFactory, ModalPropertyComponentNgFactory, UniformPropertyComponentNgFactory, IdeEventsEditorComponentNgFactory, FarrisContextMenuComponentNgFactory, MessagerComponentNgFactory, DataTableComponentNgFactory, View_TreeTableComponent_0, RenderType_TreeTableComponent, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory, ɵbNgFactory$1, ɵcNgFactory, ɵdNgFactory, ɵeNgFactory, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, FilterPanelComponentNgFactory, ɵdNgFactory$1, View_ɵk_0, RenderType_ɵk, View_ControlTreeComponent_0, RenderType_ControlTreeComponent, View_ControlBoxComponent_0, RenderType_ControlBoxComponent, View_SchemaTreeComponent_0, RenderType_SchemaTreeComponent, View_FormSaveAsComponent_0, RenderType_FormSaveAsComponent, ɵqNgFactory, PublishMenuComponentNgFactory, StyleEditorComponentNgFactory, BindingEditorComponentNgFactory, ItemCollectionEditorComponentNgFactory, InnerComponentCreatorComponentNgFactory, CollectionWithPropertyEditorComponentNgFactory, IconSelectEditorComponentNgFactory, CodeEditorComponentNgFactory, ExpressionEditorComponentNgFactory, JavaScriptBooleanEditorComponentNgFactory, SelectSchemaFieldEditorComponentNgFactory, FormSaveAsComponentNgFactory, UpdateSchemaComponentNgFactory, FieldManagerComponentNgFactory, BindingCustomEditorComponentNgFactory, SelectMappingComponentNgFactory, ImportCmpComponentNgFactory, NgbTooltipWindowNgFactory, ɵlNgFactory$1, ɵaNgFactory$1, ExpressioneditorComponentNgFactory, ComputeRuleEditorComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$2, ResponseLayoutEditorComponentNgFactory, ColumnWidthSettingComponentNgFactory, GroupHeaderFormComponentNgFactory, SelectColumnsComponentNgFactory, ColumnGroupEditorComponentNgFactory, SelectHelpTextFieldComponentNgFactory, SelectHelpMetadataComponentNgFactory, SelectHelpConditionComponentNgFactory, FormLayoutSettingComponentNgFactory, ɵbcNgFactory, ɵbdNgFactory, ɵbeNgFactory, ɵbfNgFactory, ɵbgNgFactory, ɵbiNgFactory, ɵbkNgFactory, ɵbhNgFactory, SelectHelpDisplayFieldsComponentNgFactory, ɵblNgFactory, View_DatagridComponent_0, RenderType_DatagridComponent, View_SwitchComponent_0, RenderType_SwitchComponent, View_SplitterComponent_0, RenderType_SplitterComponent, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent, ResizeService, CommonUtils, RuntimeStateService, IdService, FarrisCommonModule, ColumnFormatService, DataColumnModule, View_CodeViewComponent_0, RenderType_CodeViewComponent, CommonFileNavTreeComponentNgFactory, ɵpNgFactory, ɵqNgFactory$1, CodeViewComponentNgFactory, AnimationDriver, ɵAnimationStyleNormalizer, ɵAnimationEngine, ɵangular_packages_platform_browser_animations_animations_a, ɵangular_packages_platform_browser_animations_animations_b, ɵInjectableAnimationEngine, ɵangular_packages_platform_browser_animations_animations_c, ɵBrowserAnimationBuilder, BrowserAnimationsModule, ANIMATION_MODULE_TYPE, LocaleService, FARRIS_LOCAL_CUSTOM_DATA, LocaleModule, PopoverConfig, PopoverModule, PositioningService, ComponentLoaderFactory, DateTimeHelperService, DateHelperModule, ComboLocaleService, ComboService, ComboListModule, AttentionService, FarrisTooltipModule, IntlService, CldrIntlService, IntlModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule, DatePickerModule, TOUCH_ENABLED, touchEnabled, PopupService, POPUP_CONTAINER, PopupModule, ResizeBatchService, ResizeSensorModule, GSPMetadataRTService, ɵa$2, ɵb$1, MetadataRTSelectModule, GSPMetadataRTServiceModule, NumberHelperService, NumberHelperModule, PaginationService, PaginationModule, FarrisContextMenuService, FarrisContextMenuModule, DialogService, FarrisDialogModule, QuerySolutionService, FilterConditionModule, FilterService, ConvertorService, SolutionService, SimpleFilterModule, OverlayContainer, FullscreenOverlayContainer, Overlay, ScrollStrategyOptions, OverlayPositionBuilder, OverlayKeyboardDispatcher, ɵc, ɵd$1, OverlayModule, Directionality, BidiModule, AnimationBuilder, ɵm$1, ExpressionEventService, ExpressionService, ɵj, ExpressionModule, ɵn$2, DialogContainerService, DialogService$1, WindowContainerService, WindowService, SharedModule$3, DialogModule, WindowModule, DialogsModule, ContextMenuService, ContextMenuModule, ɵc$3, DragDrop, DragDropRegistry, DragDropModule, ViewportRuler, ScrollingModule, PerfectScrollbarModule, TimePickerModule, FarrisDatePickerModule, InputGroupModule, DatalistModule, NumberSpinnerModule, FarrisDropdownModule, FDropdownDirectiveTypeModule, PropertyEditorModule, CheckBoxModule, SharedModule, TreeViewModule, SharedModule$1, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, GridModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, ColorPickerModule, InputsModule, SharedDirectivesModule, SharedModule$2, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule, DropDownsModule, TOUCH_ENABLED$1, touchEnabled$1, PanelBarModule, SplitterModule$1, TabStripModule, LayoutModule, EventsEditorModule, LayoutModule$1, DataTableModule, LookupModule, ComboLookupModule, LanguageTextboxModule, EnumEditorModule, FarrisFormsModule, FilterModule, SorterModule, FilterPanelModule, FarrisSidebarModule, PortalModule, PlatformModule, ProgressStepModule, RtfProductionHelpModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, ButtonsModule, DatagridFilterRowModule, FilterRowComponent, FEPageModalModule, RateModule, ResponseLayoutEditorModule, HeaderGroupEditorModule, MultiSelectModule$1;
    return {
        setters: [function(module) {
            Injectable = module.Injectable;
            defineInjectable = module.defineInjectable;
            inject = module.inject;
            Component = module.Component;
            NgZone = module.NgZone;
            ViewChild = module.ViewChild;
            ComponentFactoryResolver = module.ComponentFactoryResolver;
            Injector = module.Injector;
            ElementRef = module.ElementRef;
            INJECTOR = module.INJECTOR;
            Output = module.Output;
            EventEmitter = module.EventEmitter;
            ViewEncapsulation = module.ViewEncapsulation;
            Input = module.Input;
            TemplateRef = module.TemplateRef;
            NgModule = module.NgModule;
            ɵcrt = module.ɵcrt;
            ɵccf = module.ɵccf;
            ɵvid = module.ɵvid;
            ɵeld = module.ɵeld;
            ɵdid = module.ɵdid;
            ɵqud = module.ɵqud;
            ɵnov = module.ɵnov;
            ɵprd = module.ɵprd;
            ChangeDetectorRef = module.ChangeDetectorRef;
            ApplicationRef = module.ApplicationRef;
            Renderer2 = module.Renderer2;
            ɵted = module.ɵted;
            ɵand = module.ɵand;
            ViewContainerRef = module.ViewContainerRef;
            ɵEMPTY_MAP = module.ɵEMPTY_MAP;
            ɵcmf = module.ɵcmf;
            ɵmod = module.ɵmod;
            ɵmpd = module.ɵmpd;
            ɵCodegenComponentFactoryResolver = module.ɵCodegenComponentFactoryResolver;
            NgModuleRef = module.NgModuleRef;
            LOCALE_ID = module.LOCALE_ID;
            ɵangular_packages_core_core_s = module.ɵangular_packages_core_core_s;
            Compiler = module.Compiler;
            APP_ID = module.APP_ID;
            ɵangular_packages_core_core_h = module.ɵangular_packages_core_core_h;
            IterableDiffers = module.IterableDiffers;
            ɵangular_packages_core_core_q = module.ɵangular_packages_core_core_q;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵangular_packages_core_core_r = module.ɵangular_packages_core_core_r;
            Sanitizer = module.Sanitizer;
            PLATFORM_ID = module.PLATFORM_ID;
            ɵConsole = module.ɵConsole;
            RendererFactory2 = module.RendererFactory2;
            Testability = module.Testability;
            ErrorHandler = module.ErrorHandler;
            APP_INITIALIZER = module.APP_INITIALIZER;
            NgProbeToken = module.NgProbeToken;
            ApplicationInitStatus = module.ApplicationInitStatus;
            ApplicationModule = module.ApplicationModule;
            ɵAPP_ROOT = module.ɵAPP_ROOT;
        }
        , function(module) {
            __extends = module.__extends;
            __decorate = module.__decorate;
            __metadata = module.__metadata;
            __rest = module.__rest;
        }
        , function(module) {
            BrowserModule = module.BrowserModule;
            DomSanitizer = module.DomSanitizer;
            ɵDomSanitizerImpl = module.ɵDomSanitizerImpl;
            HAMMER_GESTURE_CONFIG = module.HAMMER_GESTURE_CONFIG;
            HammerGestureConfig = module.HammerGestureConfig;
            EVENT_MANAGER_PLUGINS = module.EVENT_MANAGER_PLUGINS;
            ɵDomEventsPlugin = module.ɵDomEventsPlugin;
            ɵKeyEventsPlugin = module.ɵKeyEventsPlugin;
            ɵHammerGesturesPlugin = module.ɵHammerGesturesPlugin;
            HAMMER_LOADER = module.HAMMER_LOADER;
            EventManager = module.EventManager;
            ɵDomSharedStylesHost = module.ɵDomSharedStylesHost;
            ɵDomRendererFactory2 = module.ɵDomRendererFactory2;
            ɵSharedStylesHost = module.ɵSharedStylesHost;
            DOCUMENT$1 = module.DOCUMENT;
            ɵangular_packages_platform_browser_platform_browser_a = module.ɵangular_packages_platform_browser_platform_browser_a;
            ɵangular_packages_platform_browser_platform_browser_j = module.ɵangular_packages_platform_browser_platform_browser_j;
            platformBrowser = module.platformBrowser;
        }
        , function(module) {
            CommonModule = module.CommonModule;
            NgIf = module.NgIf;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ɵangular_packages_common_common_a = module.ɵangular_packages_common_common_a;
            DOCUMENT = module.DOCUMENT;
            Location = module.Location;
        }
        , function(module) {
            NotifyService = module.NotifyService;
            NotifyModule = module.NotifyModule;
        }
        , function(module) {
            CodeViewComponent = module.CodeViewComponent;
            IdeCodeViewModule = module.IdeCodeViewModule;
            ɵa = module.ɵa;
            ContextService = module.ContextService;
            ɵe = module.ɵe;
            ɵb$2 = module.ɵb;
            ɵc$1 = module.ɵc;
            ɵd$2 = module.ɵd;
            ɵn$1 = module.ɵn;
            ɵl = module.ɵl;
            ɵo = module.ɵo;
            ɵm$2 = module.ɵm;
            IDE_CODE_VIEW_CONFIGER = module.IDE_CODE_VIEW_CONFIGER;
            ɵx = module.ɵx;
            ɵt = module.ɵt;
            ɵy = module.ɵy;
            ɵbc = module.ɵbc;
            ɵbf = module.ɵbf;
            ɵbi = module.ɵbi;
            IDE_CODE_VIEW_CONFIG = module.IDE_CODE_VIEW_CONFIG;
        }
        , function(module) {
            ControlTreeNodeType = module.ControlTreeNodeType;
            ControlTreeComponent = module.ControlTreeComponent;
            ControlBoxComponent = module.ControlBoxComponent;
            SchemaTreeComponent = module.SchemaTreeComponent;
            DragResolveService = module.DragResolveService;
            UpdateFormSchemaService = module.UpdateFormSchemaService;
            ItemCollectionEditorComponent = module.ItemCollectionEditorComponent;
            PublishMenuComponent = module.PublishMenuComponent;
            FormSaveAsComponent = module.FormSaveAsComponent;
            FarrisDesignerDevkitModule = module.FarrisDesignerDevkitModule;
            ɵp = module.ɵp;
            ɵm = module.ɵm;
            ɵk = module.ɵk;
            ɵn = module.ɵn;
            ɵg = module.ɵg;
            ɵh = module.ɵh;
            ɵb = module.ɵb;
            ɵi = module.ɵi;
            IDEPublishMenuModule = module.IDEPublishMenuModule;
            ɵs = module.ɵs;
        }
        , function(module) {
            GridFieldDataType = module.GridFieldDataType;
            FormSchemaEntityFieldType$Type = module.FormSchemaEntityFieldType$Type;
            FormBindingType = module.FormBindingType;
            DomService = module.DomService;
            DesignViewModelService = module.DesignViewModelService;
            RefreshFormService = module.RefreshFormService;
            FormBasicService = module.FormBasicService;
            FormSchemaEntityFieldTypeName = module.FormSchemaEntityFieldTypeName;
            FormVariableCategory = module.FormVariableCategory;
            SchemaService = module.SchemaService;
            StateMachineService = module.StateMachineService;
            DataStatesService = module.DataStatesService;
            DesignerHostSettingService = module.DesignerHostSettingService;
            WebCmdService = module.WebCmdService;
            DesignerEnvType = module.DesignerEnvType;
        }
        , function(module) {
            DgControl = module.DgControl;
            ControlService = module.ControlService;
            AllComponents = module.AllComponents;
            FarrisMobileDesignerUIModule = module.FarrisMobileDesignerUIModule;
        }
        , function(module) {
            IDesignerHost = module.IDesignerHost;
        }
        , function(module) {
            MessagerService = module.MessagerService;
            MessagerModule = module.MessagerModule;
            MESSAGER_DEFAULT_CONFIG = module.MESSAGER_DEFAULT_CONFIG;
            MessagerDefaultConfig = module.MessagerDefaultConfig;
        }
        , function(module) {
            HttpClient = module.HttpClient;
            HttpHeaders = module.HttpHeaders;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
            HttpClientModule = module.HttpClientModule;
        }
        , function(module) {
            set = module.set;
            cloneDeep = module.cloneDeep;
            omit = module.omit;
            get = module.get;
            merge = module.merge;
        }
        , function(module) {
            GSPElementDataType = module.GSPElementDataType;
            GSPElementObjectType = module.GSPElementObjectType;
            CmElementConst = module.CmElementConst;
            EnumIndexType$1 = module.EnumIndexType;
            GSPElementDataTypes = module.GSPElementDataTypes;
        }
        , function(module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }
        , function(module) {
            ResizeObserver = module.default;
        }
        , function(module) {
            Subject = module.Subject;
            of = module.of;
        }
        , function(module) {
            GSPMetadataService = module.GSPMetadataService;
            GSPMetadataServiceModule = module.GSPMetadataServiceModule;
            ɵa$1 = module.ɵa;
            ɵd = module.ɵd;
            MetadataSelectModule = module.MetadataSelectModule;
        }
        , function(module) {
            LoadingService = module.LoadingService;
            LoadingModule = module.LoadingModule;
            LOADING_DEFAULT_CONFIG = module.LOADING_DEFAULT_CONFIG;
            loaddingDefaultConfig = module.loaddingDefaultConfig;
        }
        , function(module) {
            EditorTypes = module.EditorTypes;
            DatagridEditorsModule = module.DatagridEditorsModule;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$3 = module.ɵa;
            ɵb$3 = module.ɵb;
            ɵc$2 = module.ɵc;
            ɵd$3 = module.ɵd;
            ɵe$1 = module.ɵe;
            ɵf = module.ɵf;
            ɵg$1 = module.ɵg;
            ɵh$1 = module.ɵh;
            ɵi$1 = module.ɵi;
            ɵj$1 = module.ɵj;
            ɵk$1 = module.ɵk;
            DatagridEnumEditorComponent = module.DatagridEnumEditorComponent;
            DatagridFilterEditorComponent = module.DatagridFilterEditorComponent;
            DatagridSortEditorComponent = module.DatagridSortEditorComponent;
        }
        , function(module) {
            tap = module.tap;
            switchMap = module.switchMap;
            map = module.map;
        }
        , function(module) {
            FormsModule = module.FormsModule;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            NgModel = module.NgModel;
            NgControl = module.NgControl;
            NgControlStatus = module.NgControlStatus;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            FormBuilder = module.FormBuilder;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
            ReactiveFormsModule = module.ReactiveFormsModule;
        }
        , function(module) {
            CacheService = module.CacheService;
            GSP = module.GSP;
            HttpService = module.HttpService;
            CacheLocalStorage = module.CacheLocalStorage;
            CacheMemoryStorage = module.CacheMemoryStorage;
            CacheSessionStorage = module.CacheSessionStorage;
            CacheModule = module.CacheModule;
            GSPHttpModule = module.GSPHttpModule;
        }
        , function(module) {
            PropertyPanelModule = module.PropertyPanelModule;
            PropertyPanelComponent = module.PropertyPanelComponent;
        }
        , function(module) {
            SplitterModule = module.SplitterModule;
            SplitterComponent = module.SplitterComponent;
            SplitterPaneComponent = module.SplitterPaneComponent;
        }
        , function(module) {
            SwitchModule = module.SwitchModule;
            SwitchComponent = module.SwitchComponent;
            SWITCH_OPTIONS = module.SWITCH_OPTIONS;
        }
        , function(module) {
            FAreaResponseModule = module.FAreaResponseModule;
            FAreaResponseDirective = module.FAreaResponseDirective;
        }
        , function(module) {
            AngularDraggableModule = module.AngularDraggableModule;
            AngularResizableDirective = module.AngularResizableDirective;
        }
        , function(module) {
            TreeTableModule = module.TreeTableModule;
            TreeTableComponent = module.TreeTableComponent;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }
        , function(module) {
            FarrisTabsModule = module.FarrisTabsModule;
            NgbDropdownConfig = module.NgbDropdownConfig;
            NgbTooltipConfig = module.NgbTooltipConfig;
            TabService = module.TabService;
            TabConfig = module.TabConfig;
            NgbDropdownModule = module.NgbDropdownModule;
            NgbTooltipModule = module.NgbTooltipModule;
        }
        , function(module) {
            DatagridComponent = module.DatagridComponent;
            DatagridModule = module.DatagridModule;
            DatagridSmartFilterService = module.DatagridSmartFilterService;
            DatagridFacadeService = module.DatagridFacadeService;
            DatagridService = module.DatagridService;
            ValidatorMessagerService = module.ValidatorMessagerService;
            NgxPaginationModule = module.NgxPaginationModule;
            ScrollbarModule = module.ScrollbarModule;
            DatagridSmartFilterModule = module.DatagridSmartFilterModule;
            SCROLLBAR_CONFIG = module.SCROLLBAR_CONFIG;
            GRID_FILTER_ROW = module.GRID_FILTER_ROW;
            GRID_EDITORS = module.GRID_EDITORS;
        }
        , function(module) {
            PopoverContainerComponentNgFactory = module.PopoverContainerComponentNgFactory;
        }
        , function(module) {
            NotifyContainerComponentNgFactory = module.NotifyContainerComponentNgFactory;
        }
        , function(module) {
            ModalBackdropComponentNgFactory = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory = module.ModalContainerComponentNgFactory;
        }
        , function(module) {
            TimePickerPanelComponentNgFactory = module.TimePickerPanelComponentNgFactory;
        }
        , function(module) {
            CalendarComponentNgFactory = module.CalendarComponentNgFactory;
        }
        , function(module) {
            LoadingComponentNgFactory = module.LoadingComponentNgFactory;
        }
        , function(module) {
            TooltipComponentNgFactory = module.TooltipComponentNgFactory;
        }
        , function(module) {
            PopupComponentNgFactory = module.PopupComponentNgFactory;
        }
        , function(module) {
            StringFilterCellComponentNgFactory = module.StringFilterCellComponentNgFactory;
            NumericFilterCellComponentNgFactory = module.NumericFilterCellComponentNgFactory;
            BooleanFilterCellComponentNgFactory = module.BooleanFilterCellComponentNgFactory;
            DateFilterCellComponentNgFactory = module.DateFilterCellComponentNgFactory;
            StringFilterMenuComponentNgFactory = module.StringFilterMenuComponentNgFactory;
            NumericFilterMenuComponentNgFactory = module.NumericFilterMenuComponentNgFactory;
            DateFilterMenuComponentNgFactory = module.DateFilterMenuComponentNgFactory;
            BooleanFilterMenuComponentNgFactory = module.BooleanFilterMenuComponentNgFactory;
        }
        , function(module) {
            SelectMetadataComponentNgFactory = module.SelectMetadataComponentNgFactory;
            ɵbNgFactory = module.ɵbNgFactory;
        }
        , function(module) {
            SelectMetadataRTComponentNgFactory = module.SelectMetadataRTComponentNgFactory;
        }
        , function(module) {
            ViewModelComponentNgFactory = module.ViewModelComponentNgFactory;
        }
        , function(module) {
            View_PropertyPanelComponent_0 = module.View_PropertyPanelComponent_0;
            RenderType_PropertyPanelComponent = module.RenderType_PropertyPanelComponent;
            PropertyPanelComponentNgFactory = module.PropertyPanelComponentNgFactory;
            TextboxPropertyComponentNgFactory = module.TextboxPropertyComponentNgFactory;
            NumberPropertyComponentNgFactory = module.NumberPropertyComponentNgFactory;
            CombolistPropertyComponentNgFactory = module.CombolistPropertyComponentNgFactory;
            DatePropertyComponentNgFactory = module.DatePropertyComponentNgFactory;
            ModalPropertyComponentNgFactory = module.ModalPropertyComponentNgFactory;
            UniformPropertyComponentNgFactory = module.UniformPropertyComponentNgFactory;
            IdeEventsEditorComponentNgFactory = module.IdeEventsEditorComponentNgFactory;
        }
        , function(module) {
            FarrisContextMenuComponentNgFactory = module.FarrisContextMenuComponentNgFactory;
        }
        , function(module) {
            MessagerComponentNgFactory = module.MessagerComponentNgFactory;
        }
        , function(module) {
            DataTableComponentNgFactory = module.DataTableComponentNgFactory;
        }
        , function(module) {
            View_TreeTableComponent_0 = module.View_TreeTableComponent_0;
            RenderType_TreeTableComponent = module.RenderType_TreeTableComponent;
            TreeTableComponentNgFactory = module.TreeTableComponentNgFactory;
        }
        , function(module) {
            LookupLeftComponentNgFactory = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory = module.LookupTabsComponentNgFactory;
        }
        , function(module) {
            LanguageTextPanelComponentNgFactory = module.LanguageTextPanelComponentNgFactory;
        }
        , function(module) {
            EnumEditorComponentNgFactory = module.EnumEditorComponentNgFactory;
        }
        , function(module) {
            FilterEditorComponentNgFactory = module.FilterEditorComponentNgFactory;
        }
        , function(module) {
            SortEditorComponentNgFactory = module.SortEditorComponentNgFactory;
        }
        , function(module) {
            ɵlNgFactory = module.ɵlNgFactory;
            DatagridTextboxComponentNgFactory = module.DatagridTextboxComponentNgFactory;
            DatagridTextareaComponentNgFactory = module.DatagridTextareaComponentNgFactory;
            ɵaNgFactory = module.ɵaNgFactory;
            ɵbNgFactory$1 = module.ɵbNgFactory;
            ɵcNgFactory = module.ɵcNgFactory;
            ɵdNgFactory = module.ɵdNgFactory;
            ɵeNgFactory = module.ɵeNgFactory;
            ɵfNgFactory = module.ɵfNgFactory;
            ɵgNgFactory = module.ɵgNgFactory;
            ɵhNgFactory = module.ɵhNgFactory;
            ɵiNgFactory = module.ɵiNgFactory;
            ɵjNgFactory = module.ɵjNgFactory;
            ɵkNgFactory = module.ɵkNgFactory;
            DatagridEnumEditorComponentNgFactory = module.DatagridEnumEditorComponentNgFactory;
            DatagridSortEditorComponentNgFactory = module.DatagridSortEditorComponentNgFactory;
            DatagridFilterEditorComponentNgFactory = module.DatagridFilterEditorComponentNgFactory;
        }
        , function(module) {
            FilterPanelComponentNgFactory = module.FilterPanelComponentNgFactory;
        }
        , function(module) {
            ɵdNgFactory$1 = module.ɵdNgFactory;
        }
        , function(module) {
            View_ɵk_0 = module.View_ɵk_0;
            RenderType_ɵk = module.RenderType_ɵk;
            View_ControlTreeComponent_0 = module.View_ControlTreeComponent_0;
            RenderType_ControlTreeComponent = module.RenderType_ControlTreeComponent;
            View_ControlBoxComponent_0 = module.View_ControlBoxComponent_0;
            RenderType_ControlBoxComponent = module.RenderType_ControlBoxComponent;
            View_SchemaTreeComponent_0 = module.View_SchemaTreeComponent_0;
            RenderType_SchemaTreeComponent = module.RenderType_SchemaTreeComponent;
            View_FormSaveAsComponent_0 = module.View_FormSaveAsComponent_0;
            RenderType_FormSaveAsComponent = module.RenderType_FormSaveAsComponent;
            ɵqNgFactory = module.ɵqNgFactory;
            PublishMenuComponentNgFactory = module.PublishMenuComponentNgFactory;
            StyleEditorComponentNgFactory = module.StyleEditorComponentNgFactory;
            BindingEditorComponentNgFactory = module.BindingEditorComponentNgFactory;
            ItemCollectionEditorComponentNgFactory = module.ItemCollectionEditorComponentNgFactory;
            InnerComponentCreatorComponentNgFactory = module.InnerComponentCreatorComponentNgFactory;
            CollectionWithPropertyEditorComponentNgFactory = module.CollectionWithPropertyEditorComponentNgFactory;
            IconSelectEditorComponentNgFactory = module.IconSelectEditorComponentNgFactory;
            CodeEditorComponentNgFactory = module.CodeEditorComponentNgFactory;
            ExpressionEditorComponentNgFactory = module.ExpressionEditorComponentNgFactory;
            JavaScriptBooleanEditorComponentNgFactory = module.JavaScriptBooleanEditorComponentNgFactory;
            SelectSchemaFieldEditorComponentNgFactory = module.SelectSchemaFieldEditorComponentNgFactory;
            FormSaveAsComponentNgFactory = module.FormSaveAsComponentNgFactory;
            UpdateSchemaComponentNgFactory = module.UpdateSchemaComponentNgFactory;
            FieldManagerComponentNgFactory = module.FieldManagerComponentNgFactory;
            BindingCustomEditorComponentNgFactory = module.BindingCustomEditorComponentNgFactory;
            SelectMappingComponentNgFactory = module.SelectMappingComponentNgFactory;
            ImportCmpComponentNgFactory = module.ImportCmpComponentNgFactory;
        }
        , function(module) {
            NgbTooltipWindowNgFactory = module.NgbTooltipWindowNgFactory;
        }
        , function(module) {
            ɵlNgFactory$1 = module.ɵlNgFactory;
            ɵaNgFactory$1 = module.ɵaNgFactory;
            ExpressioneditorComponentNgFactory = module.ExpressioneditorComponentNgFactory;
            ComputeRuleEditorComponentNgFactory = module.ComputeRuleEditorComponentNgFactory;
        }
        , function(module) {
            DialogComponentNgFactory = module.DialogComponentNgFactory;
            DialogTitleBarComponentNgFactory = module.DialogTitleBarComponentNgFactory;
            WindowComponentNgFactory = module.WindowComponentNgFactory;
            WindowTitleBarComponentNgFactory = module.WindowTitleBarComponentNgFactory;
        }
        , function(module) {
            FilterRowComponentNgFactory = module.FilterRowComponentNgFactory;
            FilterTextboxComponentNgFactory = module.FilterTextboxComponentNgFactory;
            FilterCheckboxComponentNgFactory = module.FilterCheckboxComponentNgFactory;
            ConditionEditorComponentNgFactory = module.ConditionEditorComponentNgFactory;
            FilterDatalistComponentNgFactory = module.FilterDatalistComponentNgFactory;
            FilterRowPanelComponentNgFactory = module.FilterRowPanelComponentNgFactory;
            FilterRowEditorComponentNgFactory = module.FilterRowEditorComponentNgFactory;
            FilterSelectComponentNgFactory = module.FilterSelectComponentNgFactory;
        }
        , function(module) {
            FEPageModalComponentNgFactory = module.FEPageModalComponentNgFactory;
            FEModalBackdropComponentNgFactory = module.FEModalBackdropComponentNgFactory;
            ɵaNgFactory$2 = module.ɵaNgFactory;
        }
        , function(module) {
            ResponseLayoutEditorComponentNgFactory = module.ResponseLayoutEditorComponentNgFactory;
            ColumnWidthSettingComponentNgFactory = module.ColumnWidthSettingComponentNgFactory;
        }
        , function(module) {
            GroupHeaderFormComponentNgFactory = module.GroupHeaderFormComponentNgFactory;
            SelectColumnsComponentNgFactory = module.SelectColumnsComponentNgFactory;
            ColumnGroupEditorComponentNgFactory = module.ColumnGroupEditorComponentNgFactory;
        }
        , function(module) {
            SelectHelpTextFieldComponentNgFactory = module.SelectHelpTextFieldComponentNgFactory;
            SelectHelpMetadataComponentNgFactory = module.SelectHelpMetadataComponentNgFactory;
            SelectHelpConditionComponentNgFactory = module.SelectHelpConditionComponentNgFactory;
            FormLayoutSettingComponentNgFactory = module.FormLayoutSettingComponentNgFactory;
            ɵbcNgFactory = module.ɵbcNgFactory;
            ɵbdNgFactory = module.ɵbdNgFactory;
            ɵbeNgFactory = module.ɵbeNgFactory;
            ɵbfNgFactory = module.ɵbfNgFactory;
            ɵbgNgFactory = module.ɵbgNgFactory;
            ɵbiNgFactory = module.ɵbiNgFactory;
            ɵbkNgFactory = module.ɵbkNgFactory;
            ɵbhNgFactory = module.ɵbhNgFactory;
            SelectHelpDisplayFieldsComponentNgFactory = module.SelectHelpDisplayFieldsComponentNgFactory;
            ɵblNgFactory = module.ɵblNgFactory;
        }
        , function(module) {
            View_DatagridComponent_0 = module.View_DatagridComponent_0;
            RenderType_DatagridComponent = module.RenderType_DatagridComponent;
        }
        , function(module) {
            View_SwitchComponent_0 = module.View_SwitchComponent_0;
            RenderType_SwitchComponent = module.RenderType_SwitchComponent;
        }
        , function(module) {
            View_SplitterComponent_0 = module.View_SplitterComponent_0;
            RenderType_SplitterComponent = module.RenderType_SplitterComponent;
            View_SplitterPaneComponent_0 = module.View_SplitterPaneComponent_0;
            RenderType_SplitterPaneComponent = module.RenderType_SplitterPaneComponent;
        }
        , function(module) {
            ResizeService = module.ResizeService;
        }
        , function(module) {
            CommonUtils = module.CommonUtils;
            RuntimeStateService = module.RuntimeStateService;
            IdService = module.IdService;
            FarrisCommonModule = module.FarrisCommonModule;
        }
        , function(module) {
            ColumnFormatService = module.ColumnFormatService;
            DataColumnModule = module.DataColumnModule;
        }
        , function(module) {
            View_CodeViewComponent_0 = module.View_CodeViewComponent_0;
            RenderType_CodeViewComponent = module.RenderType_CodeViewComponent;
            CommonFileNavTreeComponentNgFactory = module.CommonFileNavTreeComponentNgFactory;
            ɵpNgFactory = module.ɵpNgFactory;
            ɵqNgFactory$1 = module.ɵqNgFactory;
            CodeViewComponentNgFactory = module.CodeViewComponentNgFactory;
        }
        , function(module) {
            AnimationDriver = module.AnimationDriver;
            ɵAnimationStyleNormalizer = module.ɵAnimationStyleNormalizer;
            ɵAnimationEngine = module.ɵAnimationEngine;
        }
        , function(module) {
            ɵangular_packages_platform_browser_animations_animations_a = module.ɵangular_packages_platform_browser_animations_animations_a;
            ɵangular_packages_platform_browser_animations_animations_b = module.ɵangular_packages_platform_browser_animations_animations_b;
            ɵInjectableAnimationEngine = module.ɵInjectableAnimationEngine;
            ɵangular_packages_platform_browser_animations_animations_c = module.ɵangular_packages_platform_browser_animations_animations_c;
            ɵBrowserAnimationBuilder = module.ɵBrowserAnimationBuilder;
            BrowserAnimationsModule = module.BrowserAnimationsModule;
            ANIMATION_MODULE_TYPE = module.ANIMATION_MODULE_TYPE;
        }
        , function(module) {
            LocaleService = module.LocaleService;
            FARRIS_LOCAL_CUSTOM_DATA = module.FARRIS_LOCAL_CUSTOM_DATA;
            LocaleModule = module.LocaleModule;
        }
        , function(module) {
            PopoverConfig = module.PopoverConfig;
            PopoverModule = module.PopoverModule;
        }
        , function(module) {
            PositioningService = module.PositioningService;
        }
        , function(module) {
            ComponentLoaderFactory = module.ComponentLoaderFactory;
        }
        , function(module) {
            DateTimeHelperService = module.DateTimeHelperService;
            DateHelperModule = module.DateHelperModule;
        }
        , function(module) {
            ComboLocaleService = module.ComboLocaleService;
            ComboService = module.ComboService;
            ComboListModule = module.ComboListModule;
        }
        , function(module) {
            AttentionService = module.AttentionService;
            FarrisTooltipModule = module.FarrisTooltipModule;
        }
        , function(module) {
            IntlService = module.IntlService;
            CldrIntlService = module.CldrIntlService;
            IntlModule = module.IntlModule;
        }
        , function(module) {
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
        }
        , function(module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }
        , function(module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }
        , function(module) {
            GSPMetadataRTService = module.GSPMetadataRTService;
            ɵa$2 = module.ɵa;
            ɵb$1 = module.ɵb;
            MetadataRTSelectModule = module.MetadataRTSelectModule;
            GSPMetadataRTServiceModule = module.GSPMetadataRTServiceModule;
        }
        , function(module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }
        , function(module) {
            PaginationService = module.PaginationService;
            PaginationModule = module.PaginationModule;
        }
        , function(module) {
            FarrisContextMenuService = module.FarrisContextMenuService;
            FarrisContextMenuModule = module.FarrisContextMenuModule;
        }
        , function(module) {
            DialogService = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
        }
        , function(module) {
            QuerySolutionService = module.QuerySolutionService;
            FilterConditionModule = module.FilterConditionModule;
        }
        , function(module) {
            FilterService = module.FilterService;
            ConvertorService = module.ConvertorService;
            SolutionService = module.SolutionService;
            SimpleFilterModule = module.SimpleFilterModule;
        }
        , function(module) {
            OverlayContainer = module.OverlayContainer;
            FullscreenOverlayContainer = module.FullscreenOverlayContainer;
            Overlay = module.Overlay;
            ScrollStrategyOptions = module.ScrollStrategyOptions;
            OverlayPositionBuilder = module.OverlayPositionBuilder;
            OverlayKeyboardDispatcher = module.OverlayKeyboardDispatcher;
            ɵc = module.ɵc;
            ɵd$1 = module.ɵd;
            OverlayModule = module.OverlayModule;
        }
        , function(module) {
            Directionality = module.Directionality;
            BidiModule = module.BidiModule;
        }
        , function(module) {
            AnimationBuilder = module.AnimationBuilder;
        }
        , function(module) {
            ɵm$1 = module.ɵm;
            ExpressionEventService = module.ExpressionEventService;
            ExpressionService = module.ExpressionService;
            ɵj = module.ɵj;
            ExpressionModule = module.ExpressionModule;
            ɵn$2 = module.ɵn;
        }
        , function(module) {
            DialogContainerService = module.DialogContainerService;
            DialogService$1 = module.DialogService;
            WindowContainerService = module.WindowContainerService;
            WindowService = module.WindowService;
            SharedModule$3 = module.SharedModule;
            DialogModule = module.DialogModule;
            WindowModule = module.WindowModule;
            DialogsModule = module.DialogsModule;
        }
        , function(module) {
            ContextMenuService = module.ContextMenuService;
            ContextMenuModule = module.ContextMenuModule;
            ɵc$3 = module.ɵc;
        }
        , function(module) {
            DragDrop = module.DragDrop;
            DragDropRegistry = module.DragDropRegistry;
            DragDropModule = module.DragDropModule;
        }
        , function(module) {
            ViewportRuler = module.ViewportRuler;
            ScrollingModule = module.ScrollingModule;
        }
        , function(module) {
            PerfectScrollbarModule = module.PerfectScrollbarModule;
        }
        , function(module) {
            TimePickerModule = module.TimePickerModule;
        }
        , function(module) {
            FarrisDatePickerModule = module.FarrisDatePickerModule;
        }
        , function(module) {
            InputGroupModule = module.InputGroupModule;
        }
        , function(module) {
            DatalistModule = module.DatalistModule;
        }
        , function(module) {
            NumberSpinnerModule = module.NumberSpinnerModule;
        }
        , function(module) {
            FarrisDropdownModule = module.FarrisDropdownModule;
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }
        , function(module) {
            PropertyEditorModule = module.PropertyEditorModule;
        }
        , function(module) {
            CheckBoxModule = module.CheckBoxModule;
            SharedModule = module.SharedModule;
            TreeViewModule = module.TreeViewModule;
        }
        , function(module) {
            SharedModule$1 = module.SharedModule;
            DragAndDropModule = module.DragAndDropModule;
            GroupModule = module.GroupModule;
            BodyModule = module.BodyModule;
            SharedFilterModule = module.SharedFilterModule;
            RowFilterModule = module.RowFilterModule;
            FilterMenuModule = module.FilterMenuModule;
            ColumnMenuModule = module.ColumnMenuModule;
            HeaderModule = module.HeaderModule;
            FooterModule = module.FooterModule;
            PagerModule = module.PagerModule;
            GridModule = module.GridModule;
        }
        , function(module) {
            EventsModule = module.EventsModule;
            NumericTextBoxModule = module.NumericTextBoxModule;
            TextBoxModule = module.TextBoxModule;
            DraggableModule = module.DraggableModule;
            SliderModule = module.SliderModule;
            SwitchModule$1 = module.SwitchModule;
            MaskedTextBoxModule = module.MaskedTextBoxModule;
            ColorPickerModule = module.ColorPickerModule;
            InputsModule = module.InputsModule;
        }
        , function(module) {
            SharedDirectivesModule = module.SharedDirectivesModule;
            SharedModule$2 = module.SharedModule;
            DropDownListModule = module.DropDownListModule;
            AutoCompleteModule = module.AutoCompleteModule;
            ComboBoxModule = module.ComboBoxModule;
            MultiSelectModule = module.MultiSelectModule;
            DropDownsModule = module.DropDownsModule;
            TOUCH_ENABLED$1 = module.TOUCH_ENABLED;
            touchEnabled$1 = module.touchEnabled;
        }
        , function(module) {
            PanelBarModule = module.PanelBarModule;
            SplitterModule$1 = module.SplitterModule;
            TabStripModule = module.TabStripModule;
            LayoutModule = module.LayoutModule;
        }
        , function(module) {
            EventsEditorModule = module.EventsEditorModule;
        }
        , function(module) {
            LayoutModule$1 = module.LayoutModule;
        }
        , function(module) {
            DataTableModule = module.DataTableModule;
        }
        , function(module) {
            LookupModule = module.LookupModule;
        }
        , function(module) {
            ComboLookupModule = module.ComboLookupModule;
        }
        , function(module) {
            LanguageTextboxModule = module.LanguageTextboxModule;
        }
        , function(module) {
            EnumEditorModule = module.EnumEditorModule;
        }
        , function(module) {
            FarrisFormsModule = module.FarrisFormsModule;
        }
        , function(module) {
            FilterModule = module.FilterModule;
        }
        , function(module) {
            SorterModule = module.SorterModule;
        }
        , function(module) {
            FilterPanelModule = module.FilterPanelModule;
        }
        , function(module) {
            FarrisSidebarModule = module.FarrisSidebarModule;
        }
        , function(module) {
            PortalModule = module.PortalModule;
        }
        , function(module) {
            PlatformModule = module.PlatformModule;
        }
        , function(module) {
            ProgressStepModule = module.ProgressStepModule;
        }
        , function(module) {
            RtfProductionHelpModule = module.RtfProductionHelpModule;
        }
        , function(module) {
            ButtonModule = module.ButtonModule;
            ButtonGroupModule = module.ButtonGroupModule;
            ListModule = module.ListModule;
            SplitButtonModule = module.SplitButtonModule;
            DropDownButtonModule = module.DropDownButtonModule;
            ButtonsModule = module.ButtonsModule;
        }
        , function(module) {
            DatagridFilterRowModule = module.DatagridFilterRowModule;
            FilterRowComponent = module.FilterRowComponent;
        }
        , function(module) {
            FEPageModalModule = module.FEPageModalModule;
        }
        , function(module) {
            RateModule = module.RateModule;
        }
        , function(module) {
            ResponseLayoutEditorModule = module.ResponseLayoutEditorModule;
        }
        , function(module) {
            HeaderGroupEditorModule = module.HeaderGroupEditorModule;
        }
        , function(module) {
            MultiSelectModule$1 = module.MultiSelectModule;
        }
        ],
        execute: function() {

            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                SERVER_IP: ''
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

            var DesignerHost = /** @class */
            (function(_super) {
                __extends(DesignerHost, _super);
                function DesignerHost() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.desigenrHost = new Map();
                    return _this;
                }
                DesignerHost.prototype.addService = function(serviceType, service) {
                    this.desigenrHost.set(serviceType, service);
                }
                ;
                DesignerHost.prototype.getService = function(serviceType) {
                    return this.desigenrHost.get(serviceType);
                }
                ;
                return DesignerHost;
            }(IDesignerHost));

            /**
             * 设计器左侧tab页签
             */
            var LEFT_TAB_TYPE;
            (function(LEFT_TAB_TYPE) {
                /** 控件树节点--设计时 */
                LEFT_TAB_TYPE["controlTree"] = "controlTree";
                /** 控件工具箱 */
                LEFT_TAB_TYPE["controllist"] = "controllist";
                /** schema实体树 */
                LEFT_TAB_TYPE["schemaTree"] = "schemaTree";
            }
            )(LEFT_TAB_TYPE || (LEFT_TAB_TYPE = {}));
            /**
             * 右侧为控件设计器时，区分三种子页面
             */
            var BOTTOM_TAB_TYPE;
            (function(BOTTOM_TAB_TYPE) {
                /**
                 * 可视化设计器
                 */
                BOTTOM_TAB_TYPE["formDesigner"] = "formDesigner";
                /**
                 * 代码编辑器
                 */
                BOTTOM_TAB_TYPE["codeEditor"] = "codeEditor";
                /**
                 * 样式编辑器
                 */
                BOTTOM_TAB_TYPE["classEditor"] = "classEditor";
                /**
                 * 表单设置
                 */
                BOTTOM_TAB_TYPE["formSetting"] = "formSetting";
            }
            )(BOTTOM_TAB_TYPE || (BOTTOM_TAB_TYPE = {}));

            var _a;
            var SchemaDOMMapping = /** @class */
            (function() {
                function SchemaDOMMapping() {}
                /**
                 * 提供字段名称和DOM控件标题的映射
                 * @param controlType 控件类型
                 */
                SchemaDOMMapping.getControlName = function(controlType) {
                    var domField = '';
                    // 字段名称的映射根据控件类型区分
                    switch (controlType) {
                    case 'Button':
                        {
                            domField = 'text';
                            break;
                        }
                    case 'GridField':
                    case 'TreeGridField':
                        {
                            domField = 'caption';
                            break;
                        }
                    default:
                        {
                            domField = 'title';
                            break;
                        }
                    }
                    return domField;
                }
                ;
                /**
                 * 提供schema字段基础属性和DOM控件属性的映射
                 * @param control 控件元数据
                 */
                SchemaDOMMapping.mappingDomPropAndSchemaProp = function(control) {
                    var controlType = control.type;
                    // 1、 基础字段
                    var array = [];
                    if (controlType !== DgControl.GridField.type && controlType !== DgControl.TreeGridField.type) {
                        array.push({
                            domField: 'require',
                            schemaField: 'require'
                        });
                        array.push({
                            domField: 'defaultValue',
                            schemaField: 'defaultValue'
                        });
                    }
                    // 只读属性
                    if (controlType !== DgControl.TreeGridField.type) {
                        array.push({
                            domField: 'readonly',
                            schemaField: 'readonly'
                        });
                    }
                    // 字段名称的映射根据控件类型区分
                    switch (controlType) {
                    case DgControl.Button.type:
                        {
                            array.push({
                                domField: 'text',
                                schemaField: 'name'
                            });
                            break;
                        }
                    case DgControl.GridField.type:
                    case DgControl.TreeGridField.type:
                        {
                            array.push({
                                domField: 'caption',
                                schemaField: 'name'
                            });
                            break;
                        }
                    default:
                        {
                            array.push({
                                domField: 'title',
                                schemaField: 'name'
                            });
                        }
                    }
                    // 2、类型字段
                    // 文本类型和数字类型映射长度
                    if (controlType === DgControl.TextBox.type || controlType === DgControl.MultiTextBox.type || controlType === DgControl.NumericBox.type || controlType === DgControl.NumberRange.type) {
                        array.push({
                            domField: 'maxLength',
                            schemaField: 'type.length'
                        });
                    }
                    // 数字类型映射精度
                    if (controlType === DgControl.NumericBox.type || controlType === DgControl.NumberRange.type) {
                        array.push({
                            domField: 'precision',
                            schemaField: 'type.precision'
                        });
                    }
                    // 枚举类型：下拉控件、表格列控件
                    if (controlType === DgControl.EnumField.type || controlType === DgControl.GridField.type || controlType === DgControl.TreeGridField.type || controlType === DgControl.RadioGroup.type) {
                        array.push({
                            domField: 'enumData',
                            schemaField: 'type.enumValues'
                        });
                    }
                    // 3、编辑器字段
                    if (controlType !== DgControl.GridField.type && controlType !== DgControl.TreeGridField.type) {
                        array.push({
                            domField: 'type',
                            schemaField: 'editor.$type'
                        });
                    }
                    // 日期类型
                    if (controlType === DgControl.DateBox.type) {
                        array.push({
                            domField: 'dateFormat',
                            schemaField: 'editor.format'
                        });
                        array.push({
                            domField: 'fieldType',
                            schemaField: 'type.name'
                        });
                    }
                    // 数字类型、日期类型映射最大、最小值
                    if (controlType === DgControl.DateBox.type || controlType === DgControl.NumericBox.type || controlType === DgControl.NumberRange.type) {
                        array.push({
                            domField: 'maxValue',
                            schemaField: 'editor.maxValue'
                        });
                        array.push({
                            domField: 'minValue',
                            schemaField: 'editor.minValue'
                        });
                    }
                    // 帮助类型
                    if (controlType === DgControl.LookupEdit.type) {
                        array.push({
                            domField: 'dataSource',
                            schemaField: 'editor.dataSource'
                        });
                        array.push({
                            domField: 'valueField',
                            schemaField: 'editor.valueField'
                        });
                        array.push({
                            domField: 'textField',
                            schemaField: 'editor.textField'
                        });
                        array.push({
                            domField: 'displayType',
                            schemaField: 'editor.displayType'
                        });
                        array.push({
                            domField: 'mapFields',
                            schemaField: 'editor.mapFields'
                        });
                        array.push({
                            domField: 'helpId',
                            schemaField: 'editor.helpId'
                        });
                    }
                    // 列表多语
                    if (controlType === DgControl.GridField.type) {
                        array.push({
                            domField: 'multiLanguage',
                            schemaField: 'multiLanguage'
                        });
                    }
                    // 列编辑器
                    if ((controlType === DgControl.GridField.type || controlType === DgControl.TreeGridField.type) && control.editor) {
                        var editorMaps = this.mappingDomPropAndSchemaProp(control.editor);
                        editorMaps.map(function(m) {
                            return m.domField = 'editor.' + m.domField;
                        });
                        array.push.apply(array, editorMaps);
                    }
                    // 字段label相关的属性
                    array.push({
                        domField: 'path',
                        schemaField: 'bindingPath'
                    });
                    array.push({
                        domField: 'binding.path',
                        schemaField: 'bindingField'
                    });
                    array.push({
                        domField: 'binding.fullPath',
                        schemaField: 'path'
                    });
                    if (controlType === DgControl.GridField.type || controlType === DgControl.TreeGridField.type) {
                        array.push({
                            domField: 'dataField',
                            schemaField: 'bindingPath'
                        });
                    }
                    return array;
                }
                ;
                /**
                 * 将字段类型 映射为表单表格列上的类型dataType
                 * @param fieldType
                 */
                SchemaDOMMapping.mapMDataType2GridFieldType = function(fieldType) {
                    switch (fieldType.name) {
                    case GSPElementDataType.String:
                    case GSPElementDataType.Text:
                        return GridFieldDataType.string;
                    case GSPElementDataType.Decimal:
                    case GSPElementDataType.Integer:
                    case 'Number':
                    case 'BigNumber':
                        return GridFieldDataType.number;
                    case GSPElementDataType.Date:
                        return GridFieldDataType.date;
                    case GSPElementDataType.DateTime:
                        return GridFieldDataType.datetime;
                    case GSPElementDataType.Boolean:
                        return GridFieldDataType.boolean;
                    case GSPElementObjectType.Enum:
                        return GridFieldDataType.enum;
                    }
                    return '';
                }
                ;
                SchemaDOMMapping.getEditorTypesByMDataType = function(fieldType, multiLanguage, cmpType) {
                    if (multiLanguage === void 0) {
                        multiLanguage = false;
                    }
                    if (multiLanguage) {
                        return [{
                            key: DgControl.LanguageTextBox.type,
                            value: '多语言输入框'
                        }];
                    }
                    var editorTypeIterator = this.fieldControlTypeMapping[fieldType];
                    // 列表列编辑器支持的控件类型有限
                    if (cmpType === 'dataGrid') {
                        var notAllowedType_1 = [DgControl.CheckGroup.type, DgControl.RadioGroup.type, DgControl.RichTextBox.type, DgControl.Image.type, DgControl.Tags.type, DgControl.Avatar.type, DgControl.PersonnelSelector.type];
                        editorTypeIterator = editorTypeIterator.filter(function(ele) {
                            return !notAllowedType_1.includes(ele.key);
                        });
                    }
                    return editorTypeIterator;
                }
                ;
                SchemaDOMMapping.getFieldTypesByEditorType = function(editorType) {
                    if (!this.controlFieldMapping) {
                        this.reverseFieldControlMapping();
                    }
                    return this.controlFieldMapping[editorType];
                }
                ;
                SchemaDOMMapping.reverseFieldControlMapping = function() {
                    var _this = this;
                    if (this.controlFieldMapping) {
                        return;
                    }
                    this.controlFieldMapping = {};
                    var _loop_1 = function(fieldType) {
                        if (this_1.fieldControlTypeMapping.hasOwnProperty(fieldType)) {
                            var controlTypes = this_1.fieldControlTypeMapping[fieldType];
                            if (!controlTypes || !controlTypes.length) {
                                return "continue";
                            }
                            controlTypes.forEach(function(item) {
                                _this.controlFieldMapping[item.key] = _this.controlFieldMapping[item.key] || [];
                                _this.controlFieldMapping[item.key].push(fieldType);
                            });
                        }
                    };
                    var this_1 = this;
                    for (var fieldType in this.fieldControlTypeMapping) {
                        _loop_1(fieldType);
                    }
                    // 追加多语控件
                    this.controlFieldMapping.LanguageTextBox = ['multiLanguage'];
                }
                ;
                /**
                 * 根据字段获取默认的控件编辑器
                 * @param fieldType 字段类型,
                 * @param multiLanguage 是否多语
                 */
                SchemaDOMMapping.getDefaultEditorByType = function(fieldType, multiLanguage) {
                    if (multiLanguage === void 0) {
                        multiLanguage = false;
                    }
                    if (multiLanguage) {
                        return {
                            $type: DgControl.LanguageTextBox.type
                        };
                    }
                    switch (fieldType) {
                    case FormSchemaEntityFieldType$Type.StringType:
                        {
                            return {
                                $type: DgControl.TextBox.type
                            };
                        }
                    case FormSchemaEntityFieldType$Type.TextType:
                        {
                            return {
                                $type: DgControl.MultiTextBox.type
                            };
                        }
                    case FormSchemaEntityFieldType$Type.NumericType:
                        {
                            return {
                                $type: DgControl.NumericBox.type
                            };
                        }
                    case FormSchemaEntityFieldType$Type.DateType:
                    case FormSchemaEntityFieldType$Type.DateTimeType:
                        {
                            return {
                                $type: DgControl.DateBox.type,
                                format: "'yyyy-MM-dd'"
                            };
                        }
                    case FormSchemaEntityFieldType$Type.BooleanType:
                        {
                            return {
                                $type: DgControl.CheckBox.type
                            };
                        }
                    case FormSchemaEntityFieldType$Type.EnumType:
                        {
                            return {
                                $type: DgControl.EnumField.type
                            };
                        }
                    }
                }
                ;
                /**
                 * 根据变量类型获取控件编辑器类型
                 */
                SchemaDOMMapping.getEditorTypeByVariableType = function(type) {
                    switch (type) {
                    case GSPElementDataType.String:
                        {
                            return DgControl.TextBox.type;
                        }
                    case 'Number':
                        {
                            return DgControl.NumericBox.type;
                        }
                    case GSPElementDataType.Boolean:
                        {
                            return DgControl.CheckBox.type;
                        }
                    case GSPElementDataType.Date:
                    case GSPElementDataType.DateTime:
                        {
                            return DgControl.DateBox.type;
                        }
                    case GSPElementDataType.Text:
                        {
                            return DgControl.MultiTextBox.type;
                        }
                    }
                }
                ;
                SchemaDOMMapping.fieldControlTypeMapping = (_a = {},
                _a[GSPElementDataType.String] = [{
                    key: DgControl.TextBox.type,
                    value: DgControl.TextBox.name
                }, {
                    key: DgControl.LookupEdit.type,
                    value: DgControl.LookupEdit.name
                }, {
                    key: DgControl.Image.type,
                    value: DgControl.Image.name
                }, {
                    key: DgControl.DateBox.type,
                    value: DgControl.DateBox.name
                }, {
                    key: DgControl.TimePicker.type,
                    value: DgControl.TimePicker.name
                }, {
                    key: DgControl.CheckGroup.type,
                    value: DgControl.CheckGroup.name
                }, {
                    key: DgControl.RadioGroup.type,
                    value: DgControl.RadioGroup.name
                }, {
                    key: DgControl.InputGroup.type,
                    value: DgControl.InputGroup.name
                }, {
                    key: DgControl.EnumField.type,
                    value: DgControl.EnumField.name
                }, {
                    key: DgControl.MultiTextBox.type,
                    value: DgControl.MultiTextBox.name
                }, {
                    key: DgControl.RichTextBox.type,
                    value: DgControl.RichTextBox.name
                }, {
                    key: DgControl.Tags.type,
                    value: DgControl.Tags.name
                }, {
                    key: DgControl.PersonnelSelector.type,
                    value: DgControl.PersonnelSelector.name
                }],
                _a[GSPElementDataType.Text] = [{
                    key: DgControl.MultiTextBox.type,
                    value: DgControl.MultiTextBox.name
                }, {
                    key: DgControl.RichTextBox.type,
                    value: DgControl.RichTextBox.name
                }, {
                    key: DgControl.Avatar.type,
                    value: DgControl.Avatar.name
                }, ],
                _a[GSPElementDataType.Decimal] = [{
                    key: DgControl.NumericBox.type,
                    value: DgControl.NumericBox.name
                }],
                _a[GSPElementDataType.Integer] = [{
                    key: DgControl.NumericBox.type,
                    value: DgControl.NumericBox.name
                }],
                _a.Number = [{
                    key: DgControl.NumericBox.type,
                    value: DgControl.NumericBox.name
                }],
                _a.BigNumber = [{
                    key: DgControl.NumericBox.type,
                    value: DgControl.NumericBox.name
                }],
                _a[GSPElementDataType.Date] = [{
                    key: DgControl.DateBox.type,
                    value: DgControl.DateBox.name
                }],
                _a[GSPElementDataType.DateTime] = [{
                    key: DgControl.DateBox.type,
                    value: DgControl.DateBox.name
                }],
                _a[GSPElementDataType.Boolean] = [{
                    key: DgControl.SwitchField.type,
                    value: DgControl.SwitchField.name
                }, {
                    key: DgControl.CheckBox.type,
                    value: DgControl.CheckBox.name
                }, ],
                _a[GSPElementObjectType.Enum] = [{
                    key: DgControl.EnumField.type,
                    value: DgControl.EnumField.name
                }, {
                    key: DgControl.RadioGroup.type,
                    value: DgControl.RadioGroup.name
                }, ],
                _a.Object = [{
                    key: DgControl.LookupEdit.type,
                    value: DgControl.LookupEdit.name
                }, {
                    key: DgControl.EnumField.type,
                    value: DgControl.EnumField.name
                }, {
                    key: DgControl.RadioGroup.type,
                    value: DgControl.RadioGroup.name
                }, ],
                _a);
                return SchemaDOMMapping;
            }());

            /**
             * 控件属性变更后，同步DOM结构
             */
            var ControlPropertyChangedService = /** @class */
            (function() {
                function ControlPropertyChangedService(domService, dgViewModelService, refreshFormService) {
                    this.domService = domService;
                    this.dgViewModelService = dgViewModelService;
                    this.refreshFormService = refreshFormService;
                }
                ControlPropertyChangedService.prototype.afterPropertyChanged = function(changeObject, propertyData, parameters, focusedComponentInstance) {
                    var viewModelId = focusedComponentInstance.viewModelId;
                    // 保存新增的变量
                    this.addNewVariableToViewModel(changeObject, viewModelId);
                    // 表达式相关属性：需要单独更新DOM结构
                    this.updateExpressionAfterPropChange(propertyData.id, changeObject, parameters);
                    // 收集关联属性(用于dgViewModel的变更)
                    var changes = this.relateChangeObjects(changeObject);
                    // 更新dgViewModel
                    this.changeDgViewModel(propertyData, changes, viewModelId);
                    // 通知控件应用变更
                    if (focusedComponentInstance && focusedComponentInstance.onPropertyChanged) {
                        focusedComponentInstance.onPropertyChanged(changeObject);
                    }
                    // 某些属性更新后需要重新刷新表单和控件树
                    this.refreshFormAfterPropChanged(changeObject);
                }
                ;
                /**
                 * 新版属性编辑器，在编辑过程中可能会新增变量，此处需要将新增的变量追加到ViewModel中
                 */
                ControlPropertyChangedService.prototype.addNewVariableToViewModel = function(changeObject, viewModelId) {
                    var newPropertyValue = changeObject.propertyValue;
                    if (newPropertyValue && newPropertyValue.isNewVariable && typeof newPropertyValue === 'object' && newPropertyValue.type === 'Variable') {
                        // 如果有则加入新变量
                        delete newPropertyValue.isNewVariable;
                        var newVar = {
                            id: newPropertyValue.field,
                            category: 'locale',
                            code: newPropertyValue.path,
                            name: newPropertyValue.path,
                            type: newPropertyValue.newVariableType || 'String'
                        };
                        delete newPropertyValue.newVariableType;
                        var viewModel = this.domService.getViewModelById(viewModelId);
                        viewModel.states.push(newVar);
                    }
                }
                ;
                /**
                 * 收集关联属性的变更(用于dgViewModel的变更)
                 * @param changeObject 变更集
                 */
                ControlPropertyChangedService.prototype.relateChangeObjects = function(changeObject) {
                    var changes = [changeObject];
                    if (changeObject.relateChangeProps && changeObject.relateChangeProps.length) {
                        changes.push.apply(changes, changeObject.relateChangeProps);
                    }
                    if (changeObject.categoryId && changeObject.categoryId.includes('gridFieldEditor')) {
                        changes.forEach(function(change) {
                            Object.assign(change, {
                                categoryId: changeObject.categoryId,
                                propertyPath: changeObject.propertyPath
                            });
                        });
                    }
                    return changes;
                }
                ;
                /**
                 * 属性面板更新后同步DOM结构
                 * @param controlId 控件ID
                 * @param changeObject 变更集
                 */
                ControlPropertyChangedService.prototype.updateExpressionAfterPropChange = function(controlId, changeObject, parameters) {
                    if (changeObject.categoryId === 'expressionData') {
                        var domJson = this.domService.domDgMap.get(controlId);
                        this.updateExpressionDomAfterPropChange(domJson, changeObject, parameters);
                    }
                }
                ;
                /**
                 * 更新表达式相关dom：帮助前表达式需要额外记录ID
                 * @param domJson 控件DOM结构
                 * @param change 变更集
                 * @param parameters 表达式ID
                 */
                ControlPropertyChangedService.prototype.updateExpressionDomAfterPropChange = function(domJson, change, parameters) {
                    if (change.categoryId !== 'expressionData' || change.propertyID !== 'dataPicking') {
                        return;
                    }
                    if (!change.propertyPath) {
                        domJson.lookupPickingExpression = parameters;
                        return;
                    }
                    set(domJson, change.propertyPath + '.lookupPickingExpression', parameters);
                }
                ;
                /**
                 *  收集Schema字段的变更
                 * @param propertyData 属性值
                 * @param changeObjects 变更集
                 * @param viewModelId  VMID
                 */
                ControlPropertyChangedService.prototype.changeDgViewModel = function(propertyData, changeObjects, viewModelId) {
                    var _this = this;
                    var dgVM = this.dgViewModelService.getDgViewModel(viewModelId);
                    // 当前VM
                    if (!dgVM) {
                        return;
                    }
                    changeObjects.map(function(changeObject) {
                        switch (propertyData.type) {
                        case DgControl.FieldSet.type:
                            {
                                // 分组节点修改标题后需要同步ViewModel字段的分组
                                if (changeObject.propertyID === 'title') {
                                    dgVM.changeGroupName(propertyData.id, changeObject.propertyValue);
                                }
                                break;
                            }
                        default:
                            {
                                // 控件节点
                                var dgVMField = void 0;
                                if (propertyData.binding && propertyData.binding.type === FormBindingType.Form && propertyData.binding.field) {
                                    dgVMField = dgVM.fields.find(function(f) {
                                        return f.id === propertyData.binding.field;
                                    });
                                }
                                if (dgVMField) {
                                    var dgVMChange = _this.getSchemaChangeByDomChange(propertyData, changeObject);
                                    dgVM.changeField(dgVMField.id, dgVMChange);
                                }
                            }
                        }
                    });
                }
                ;
                /**
                 * 更新DOM的修改至Schema实体
                 * @param propertyData 属性值
                 * @param changeObject 变更集
                 */
                ControlPropertyChangedService.prototype.getSchemaChangeByDomChange = function(propertyData, changeObject) {
                    var schemaChange = {};
                    var mappingArray = [];
                    if (changeObject.categoryId && (changeObject.categoryId.includes('gridFieldEditor') || changeObject.categoryId.includes('tableTdEditor'))) {
                        // 列编辑器属性
                        mappingArray = SchemaDOMMapping.mappingDomPropAndSchemaProp(propertyData.editor);
                    } else if (!changeObject.propertyPath) {
                        mappingArray = SchemaDOMMapping.mappingDomPropAndSchemaProp(propertyData);
                    }
                    var mappingEntity = mappingArray.find(function(f) {
                        return f.domField === changeObject.propertyID;
                    });
                    if (!mappingEntity) {
                        return {};
                    }
                    // 只读、必填属性：只有在设置为布尔值时才更新到schema，设置为状态机、变量、表达式时不更新
                    if (changeObject.propertyID === 'readonly' || changeObject.propertyID === 'require') {
                        if (typeof (changeObject.propertyValue) !== 'boolean') {
                            return schemaChange;
                        }
                    }
                    var shemaFieldPath = mappingEntity.schemaField;
                    set(schemaChange, shemaFieldPath, changeObject.propertyValue);
                    return schemaChange;
                }
                ;
                /**
                 * 某些属性更新后需要重新刷新表单和控件树
                 * @param propertyType 控件类型
                 * @param changeObject 属性变更
                 */
                ControlPropertyChangedService.prototype.refreshFormAfterPropChanged = function(changeObject) {
                    // 表单整体刷新
                    if (changeObject.needRefreshForm) {
                        this.refreshFormService.refreshFormDesigner.next();
                    }
                    // 表单局部刷新
                    if (changeObject.needRefreshedComponentId) {
                        this.refreshFormService.refreshFormDesigner.next(changeObject.needRefreshedComponentId);
                    }
                }
                ;
                ControlPropertyChangedService = __decorate([Injectable(), __metadata("design:paramtypes", [DomService, DesignViewModelService, RefreshFormService])], ControlPropertyChangedService);
                return ControlPropertyChangedService;
            }());

            var FrameProp = /** @class */
            (function() {
                function FrameProp(injector) {
                    this.injector = injector;
                }
                FrameProp.prototype.getPropConfig = function(propertyData) {
                    var propertyConfig = [];
                    // 常本信息属性
                    var usualPropConfig = this.getUsualPropConfig(propertyData);
                    propertyConfig.push(usualPropConfig);
                    return propertyConfig;
                }
                ;
                FrameProp.prototype.getUsualPropConfig = function(propertyData) {
                    var formBasicServ = this.injector.get(FormBasicService);
                    if (propertyData.module && !propertyData.module.metadataId) {
                        propertyData.module.metadataId = formBasicServ.formMetaBasicInfo.id;
                    }
                    return {
                        categoryId: 'Basic',
                        categoryName: '基本信息',
                        propertyData: propertyData.module,
                        enableCascade: true,
                        parentPropertyID: 'module',
                        properties: [{
                            propertyID: 'metadataId',
                            propertyName: '标识',
                            propertyType: 'string',
                            description: '表单元数据的id',
                            readonly: true
                        }, {
                            propertyID: 'code',
                            propertyName: '编号',
                            propertyType: 'string',
                            description: '表单元数据的编号',
                            readonly: true
                        }, {
                            propertyID: 'name',
                            propertyName: '名称',
                            propertyType: 'string',
                            description: '表单元数据的名称',
                            readonly: true
                        }, {
                            propertyID: 'showType',
                            propertyName: '展示形式',
                            propertyType: 'select',
                            iterator: [{
                                key: 'modal',
                                value: '弹出表单'
                            }, {
                                key: 'page',
                                value: '标签页'
                            }, {
                                key: 'sidebar',
                                value: '侧边栏'
                            }],
                            visible: propertyData.module.templateId === 'modal-card-template',
                            readonly: true
                        }],
                        setPropertyRelates: function(changeObject, data, parameters) {
                            if (!changeObject) {
                                return;
                            }
                            switch (changeObject.propertyID) {
                            case 'showType':
                                {
                                    changeObject.needRefreshForm = true;
                                }
                            }
                        }
                    };
                }
                ;
                return FrameProp;
            }());

            var Languages = [{
                code: 'zh-CHS',
                name: '中文简体'
            }, {
                code: 'en',
                name: 'English'
            }];
            /**
             * 根据字段/变量创建控件的逻辑
             */
            var ControlCreatorService = /** @class */
            (function() {
                function ControlCreatorService(controlService, domService) {
                    this.controlService = controlService;
                    this.domService = domService;
                }
                /**
                 * 创建Form中的控件，并根据SchemaField配置DOM属性
                 * @param schemaField schema字段
                 * @param componentType 组件类型 dataGrid/form-col-4/form-col-1....
                 * @param editorType 编辑器类型
                 * @param componentId 控件所属组件ID，用于判断控件样式
                 */
                ControlCreatorService.prototype.createControlBySchemaFeild = function(schemaField, componentType, editorType, componentId) {
                    if (!schemaField.type) {
                        return;
                    }
                    var controlType = editorType || (schemaField.editor ? schemaField.editor.$type : 'TextBox');
                    var controlMetadata = this.controlService.getControlMetaData(controlType);
                    if (!controlMetadata) {
                        return;
                    }
                    var metadata = cloneDeep(controlMetadata);
                    // 通用属性
                    var domField = SchemaDOMMapping.getControlName(controlType);
                    metadata[domField] = schemaField.name;
                    metadata.require = schemaField.require;
                    // @ts-ignore 列表列编辑中不设状态机，故此处注释掉状态机赋值
                    metadata.readonly = schemaField.readonly;
                    // 控件ID：字段bindingField_字段ID前8位(中划线转下划线)_四位随机码
                    metadata.id = schemaField.id.length > 8 ? schemaField.id.slice(0, 8) : schemaField.id;
                    metadata.id = schemaField.bindingField + '_' + metadata.id.replace(/-/g, '_') + '_' + Math.random().toString(36).substr(2, 4);
                    metadata.binding = {
                        type: FormBindingType.Form,
                        path: schemaField.bindingField,
                        field: schemaField.id,
                        fullPath: schemaField.path
                    };
                    // 把schema里面记录的path复制到控件，解决udt字段path找不到的问题。
                    metadata.path = schemaField.bindingPath;
                    // type 属性
                    // 文本类型和数字类型映射长度
                    if (controlType === DgControl.TextBox.type || controlType === DgControl.MultiTextBox.type || controlType === DgControl.NumericBox.type) {
                        metadata.maxLength = schemaField.type.length;
                    }
                    // 枚举类型
                    if (controlType === DgControl.RadioGroup.type) {
                        metadata.enumData = schemaField.type.enumValues;
                    }
                    if (controlType === DgControl.EnumField.type) {
                        metadata.enumData = schemaField.type.enumValues;
                        if (metadata.enumData) {
                            metadata.idField = 'value';
                            metadata.textField = 'name';
                        }
                    }
                    // 数字类型精度
                    if (controlType === DgControl.NumericBox.type) {
                        metadata.precision = schemaField.type.precision;
                        if (schemaField.type.$type === FormSchemaEntityFieldType$Type.BigNumericType) {
                            metadata.bigNumber = true;
                        }
                    }
                    // 默认创建controlSOurce=Farris 的DateBox控件；增加数据国际化配置
                    if (controlType === DgControl.DateBox.type) {
                        metadata.fieldType = schemaField.type.name;
                        metadata.localization = false;
                        if (schemaField.type.name === FormSchemaEntityFieldTypeName.Date || schemaField.type.name === FormSchemaEntityFieldTypeName.DateTime) {
                            metadata.localizationType = schemaField.type.name;
                        }
                        // 日期时间类型字段：启用时间选择属性
                        if (metadata.fieldType === 'DateTime') {
                            metadata.showTime = true;
                            metadata.dateFormat = 'yyyy-MM-dd HH:mm:ss';
                            metadata.returnFormat = 'yyyy-MM-dd HH:mm:ss';
                        }
                    }
                    // 下拉列表、帮助控件允许任意输入时的最大字符长度
                    if (controlType === DgControl.EnumField.type || controlType === DgControl.LookupEdit.type) {
                        metadata.maxSearchLength = schemaField.type.length;
                    }
                    // editor 属性
                    if (schemaField.editor) {
                        var _a = schemaField.editor
                          , $type = _a.$type
                          , editor = __rest(_a, ["$type"]);
                        Object.assign(metadata, editor);
                    }
                    // 设置class
                    var className = '';
                    switch (componentType) {
                    case 'form-col-1':
                        {
                            className = 'col-12 col-md-12 col-xl-12 col-el-12';
                            break;
                        }
                        // 暂时用不到
                    case 'form-col-12':
                        {
                            className = 'col-12 col-md-12 col-xl-12 col-el-12';
                            break;
                        }
                    case 'form-col-2':
                        {
                            className = 'col-12 col-md-6 col-xl-6 col-el-6';
                            break;
                        }
                        // 暂时用不到
                    case 'form-col-3':
                        {
                            className = 'col-12 col-md-6 col-xl-4 col-el-4';
                            break;
                        }
                    case 'form-col-4':
                        {
                            className = 'col-12 col-md-6 col-xl-3 col-el-2';
                            break;
                        }
                        // 暂时用不到
                    case 'form-col-6':
                        {
                            className = 'col-12 col-md-6 col-xl-6 col-el-6';
                            break;
                        }
                    }
                    // 若所属Form有统一布局配置，需要采用统一配置样式
                    if (componentId) {
                        className = this.domService.getControlClassByFormUnifiedLayout(className, componentId);
                    }
                    metadata.appearance = {
                        class: className
                    };
                    return metadata;
                }
                ;
                /**
                 * 创建表格列控件，并根据SchemaField配置DOM属性。
                 * 若包含列编辑器，则新建列编辑器控件
                 * @param schemaField schema字段
                 * @param dataField 列表dataField字段：可取schemaField.bindingPath (此参数可删除)
                 * @param gridFieldEditable 列表是否可编辑
                 * @param gridFieldType GridField/TreeGridField
                 * @param controlSource Kendo/Farris
                 */
                ControlCreatorService.prototype.createGridFieldBySchemaFeild = function(schemaField, dataField, gridFieldEditable, gridFieldType, controlSource) {
                    if (gridFieldEditable === void 0) {
                        gridFieldEditable = false;
                    }
                    if (controlSource === void 0) {
                        controlSource = 'Kendo';
                    }
                    if (!schemaField.type) {
                        return;
                    }
                    var metadata = this.controlService.getControlMetaData(gridFieldType);
                    if (!metadata) {
                        return;
                    }
                    // 通用属性
                    // 控件ID：字段bindingField_字段ID(中划线转下划线)_四位随机码
                    metadata.id = schemaField.id.length > 8 ? schemaField.id.slice(0, 8) : schemaField.id;
                    metadata.id = schemaField.bindingField + '_' + metadata.id.replace(/-/g, '_') + '_' + Math.random().toString(36).substr(2, 4);
                    metadata.caption = schemaField.name;
                    metadata.binding = {
                        type: FormBindingType.Form,
                        path: schemaField.bindingField,
                        field: schemaField.id,
                        fullPath: schemaField.path
                    };
                    metadata.controlSource = controlSource;
                    // dataField 字段
                    metadata.dataField = dataField || schemaField.bindingPath;
                    // 列类型
                    var dataType = SchemaDOMMapping.mapMDataType2GridFieldType(schemaField.type);
                    metadata.dataType = dataType;
                    // 枚举
                    if (schemaField.type.enumValues) {
                        metadata.enumData = schemaField.type.enumValues;
                    }
                    // 多语字段
                    if (schemaField.multiLanguage) {
                        metadata.languages = Languages;
                    }
                    metadata.multiLanguage = !!schemaField.multiLanguage;
                    // DateBox类型字段；增加数据国际化配置
                    if (schemaField.type.name === FormSchemaEntityFieldTypeName.Date || schemaField.type.name === FormSchemaEntityFieldTypeName.DateTime) {
                        metadata.localization = false;
                        metadata.localizationType = schemaField.type.name;
                    }
                    if (!schemaField.editor) {
                        return metadata;
                    }
                    // 列格式
                    if (controlSource === 'Farris' || controlSource === 'Primeng') {
                        metadata.frozen = 'none';
                        this.setFarrisGridFieldFormatter(dataType, metadata, schemaField);
                    } else if (schemaField.editor && schemaField.editor.format) {
                        metadata.format = schemaField.editor.format;
                    }
                    // 列编辑器
                    if (gridFieldEditable) {
                        var editor = this.createControlBySchemaFeild(schemaField, 'GridField');
                        metadata.editor = editor;
                    }
                    return metadata;
                }
                ;
                /**
                 * Farris列格式
                 * @param gridFieldType 列数据类型
                 * @param metadata 列dom
                 * @param schemaField 字段
                 */
                ControlCreatorService.prototype.setFarrisGridFieldFormatter = function(gridFieldType, metadata, schemaField) {
                    switch (gridFieldType) {
                    case 'number':
                        {
                            metadata.formatter = {
                                type: 'number',
                                precision: schemaField.type.precision,
                                thousand: ',',
                                decimal: '.'
                            };
                            break;
                        }
                    case 'date':
                        {
                            metadata.formatter = {
                                type: 'date',
                                dateFormat: 'yyyy-MM-dd'
                            };
                            break;
                        }
                    case 'datetime':
                        {
                            metadata.formatter = {
                                type: 'date',
                                dateFormat: 'yyyy-MM-dd HH:mm:ss'
                            };
                            break;
                        }
                    case 'boolean':
                        {
                            metadata.formatter = {
                                type: 'boolean',
                                trueText: '是',
                                falseText: '否'
                            };
                            break;
                        }
                    case 'enum':
                        {
                            metadata.formatter = {
                                type: 'enum'
                            };
                            break;
                        }
                    }
                }
                ;
                /**
                 * 根据变量创建控件
                 * 暂时不支持对象类型和数组类型变量
                 */
                ControlCreatorService.prototype.createControlByVariable = function(varField, componentType, controlType, componentId) {
                    if (controlType === void 0) {
                        controlType = '';
                    }
                    if (!varField.type) {
                        return;
                    }
                    if (!controlType) {
                        controlType = SchemaDOMMapping.getEditorTypeByVariableType(varField.type);
                    }
                    var metadata = this.controlService.getControlMetaData(controlType);
                    if (!metadata) {
                        return;
                    }
                    // 通用属性
                    var domField = SchemaDOMMapping.getControlName(controlType);
                    metadata[domField] = varField.name;
                    // 控件ID：字段bindingField_字段ID(中划线转下划线)_四位随机码
                    metadata.id = varField.id.length > 8 ? varField.id.slice(0, 8) : varField.id;
                    metadata.id = varField.code + '_' + metadata.id.replace(/-/g, '_') + '_' + Math.random().toString(36).substr(2, 4);
                    if (!varField.category || varField.category === FormVariableCategory.locale) {
                        // 本地变量
                        metadata.binding = {
                            type: FormBindingType.Variable,
                            path: varField.code,
                            field: varField.id,
                            fullPath: varField.code
                        };
                    } else {
                        // 后端变量
                        metadata.binding = {
                            type: FormBindingType.Variable,
                            path: 'root-component.' + varField.code,
                            field: varField.id,
                            fullPath: varField.code
                        };
                    }
                    // 默认创建controlSOurce=Farris 的DateBox控件
                    if (controlType === DgControl.DateBox.type) {
                        metadata.fieldType = varField.type;
                    }
                    // 设置class  待优化
                    var className = '';
                    switch (componentType) {
                    case 'form-col-1':
                        {
                            className = 'col-12 col-md-12 col-xl-12 col-el-12';
                            break;
                        }
                    case 'form-col-12':
                        {
                            className = 'col-12 col-md-12 col-xl-12 col-el-12';
                            break;
                        }
                    case 'form-col-2':
                        {
                            className = 'col-12 col-md-6 col-xl-6 col-el-6';
                            break;
                        }
                    case 'form-col-3':
                        {
                            className = 'col-12 col-md-6 col-xl-4 col-el-4';
                            break;
                        }
                    case 'form-col-4':
                        {
                            className = 'col-12 col-md-6 col-xl-3 col-el-2';
                            break;
                        }
                    case 'form-col-6':
                        {
                            className = 'col-12 col-md-6 col-xl-6 col-el-6';
                            break;
                        }
                    }
                    // 若所属Form有统一布局配置，需要采用统一配置样式
                    if (componentId) {
                        className = this.domService.getControlClassByFormUnifiedLayout(className, componentId);
                    }
                    metadata.appearance = {
                        class: className
                    };
                    return metadata;
                }
                ;
                /**
                 * 创建Table TD中的输入控件，并根据SchemaField配置DOM属性
                 * @param schemaField schema字段
                 */
                ControlCreatorService.prototype.createTableTdControlBySchemaFeild = function(schemaField, editorType) {
                    if (!schemaField.type) {
                        return;
                    }
                    var controlType = editorType || (schemaField.editor ? schemaField.editor.$type : 'TextBox');
                    var metadata = this.controlService.getControlMetaData(controlType);
                    if (!metadata) {
                        return;
                    }
                    // 通用属性
                    var domField = SchemaDOMMapping.getControlName(controlType);
                    metadata[domField] = schemaField.name;
                    metadata.require = schemaField.require;
                    metadata.readonly = schemaField.readonly ? true : 'viewModel.stateMachine && !viewModel.stateMachine[\'editable\']';
                    // 控件ID：字段bindingField_字段ID前8位(中划线转下划线)_四位随机码
                    metadata.id = schemaField.id.length > 8 ? schemaField.id.slice(0, 8) : schemaField.id;
                    metadata.id = schemaField.bindingField + '_' + metadata.id.replace(/-/g, '_') + '_' + Math.random().toString(36).substr(2, 4);
                    metadata.binding = {
                        type: FormBindingType.Form,
                        path: schemaField.bindingField,
                        field: schemaField.id,
                        fullPath: schemaField.path
                    };
                    // 把schema里面记录的path复制到控件，解决udt字段path找不到的问题。
                    metadata.path = schemaField.bindingPath;
                    // type 属性
                    // 文本类型和数字类型映射长度
                    if (controlType === DgControl.TextBox.type || controlType === DgControl.MultiTextBox.type || controlType === DgControl.NumericBox.type) {
                        metadata.maxLength = schemaField.type.length;
                    }
                    // 枚举类型
                    if (controlType === DgControl.RadioGroup.type) {
                        metadata.enumData = schemaField.type.enumValues;
                    }
                    if (controlType === DgControl.EnumField.type) {
                        metadata.enumData = schemaField.type.enumValues;
                        if (metadata.enumData) {
                            metadata.idField = 'value';
                            metadata.textField = 'name';
                        }
                    }
                    // 数字类型精度
                    if (controlType === DgControl.NumericBox.type) {
                        metadata.precision = schemaField.type.precision;
                        if (schemaField.type.$type === FormSchemaEntityFieldType$Type.BigNumericType) {
                            metadata.bigNumber = true;
                        }
                    }
                    // 默认创建controlSOurce=Farris 的DateBox控件；增加数据国际化配置
                    if (controlType === DgControl.DateBox.type) {
                        metadata.fieldType = schemaField.type.name;
                        metadata.localization = false;
                        if (schemaField.type.name === FormSchemaEntityFieldTypeName.Date || schemaField.type.name === FormSchemaEntityFieldTypeName.DateTime) {
                            metadata.localizationType = schemaField.type.name;
                        }
                        // 日期时间类型字段：启用时间选择属性
                        if (metadata.fieldType === 'DateTime') {
                            metadata.showTime = true;
                            metadata.dateFormat = 'yyyy-MM-dd HH:mm:ss';
                            metadata.returnFormat = 'yyyy-MM-dd HH:mm:ss';
                        }
                        metadata.returnType = 'String';
                    }
                    // 下拉列表、帮助控件允许任意输入时的最大字符长度
                    if (controlType === DgControl.EnumField.type || controlType === DgControl.LookupEdit.type) {
                        metadata.maxSearchLength = schemaField.type.length;
                    }
                    // editor 属性
                    if (schemaField.editor) {
                        var _a = schemaField.editor
                          , $type = _a.$type
                          , editor = __rest(_a, ["$type"]);
                        Object.assign(metadata, editor);
                    }
                    metadata.showInTable = true;
                    return metadata;
                }
                ;
                ControlCreatorService.ngInjectableDef = defineInjectable({
                    factory: function ControlCreatorService_Factory() {
                        return new ControlCreatorService(inject(ControlService),inject(DomService));
                    },
                    token: ControlCreatorService,
                    providedIn: "root"
                });
                ControlCreatorService = __decorate([Injectable({
                    providedIn: 'root'
                }), __metadata("design:paramtypes", [ControlService, DomService])], ControlCreatorService);
                return ControlCreatorService;
            }());

            var ClassEditorComponent = /** @class */
            (function() {
                function ClassEditorComponent(domService, ngZone) {
                    this.domService = domService;
                    this.ngZone = ngZone;
                    /** 代码编辑器配置 */
                    this.classEditorOptions = {
                        theme: 'vs-dark',
                        language: 'css',
                        formatOnType: true,
                        foldingStrategy: 'indentation',
                        folding: true,
                        showFoldingControls: 'always',
                        automaticLayout: true
                    };
                    /** 代码编辑器绑定值，组件样式 */
                    this.classCode = '';
                    this.treeCols = {};
                    this.treeData = [];
                    this.selectCop = '';
                }
                ClassEditorComponent.prototype.ngOnInit = function() {
                    var rootComponent = this.domService.getComponentById('root-component');
                    var cmps = [];
                    this.getComponents(rootComponent, cmps);
                    var treeData = [{
                        data: {
                            id: rootComponent.id,
                            name: rootComponent.id + '组件',
                            componentId: rootComponent.id
                        },
                        children: cmps,
                        expanded: true
                    }];
                    // console.log(treeData);
                    this.treeData = treeData;
                    this.treeCols = [{
                        field: 'name',
                        title: '名称'
                    }];
                    if (!this.domService.module.customClass) {
                        this.domService.module.customClass = {};
                    }
                }
                ;
                ClassEditorComponent.prototype.ngOnDestroy = function() {
                    this.saveClassEditor();
                }
                ;
                ClassEditorComponent.prototype.getComponents = function(rootNode, cmps) {
                    if (!rootNode) {
                        return cmps;
                    }
                    if (rootNode.contents) {
                        for (var _i = 0, _a = rootNode.contents; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.type === 'ComponentRef') {
                                cmps.push({
                                    data: {
                                        id: item.id,
                                        name: item.component + '组件',
                                        componentId: item.component
                                    }
                                });
                            } else {
                                this.getComponents(item, cmps);
                            }
                        }
                    }
                    return cmps;
                }
                ;
                /**
                 * 树行选中
                 */
                ClassEditorComponent.prototype.nodeSelected = function($event) {
                    var componentId = $event.node.data.componentId;
                    this.selectCop = componentId;
                    this.classCode = '';
                    if (componentId) {
                        var customClass = this.domService.module.customClass;
                        this.classCode = customClass && customClass[componentId] || '';
                    }
                }
                ;
                /**
                 * 树行取消选中
                 */
                ClassEditorComponent.prototype.nodeUnSelected = function($event) {
                    var componentId = $event.node.data.componentId;
                    var customClass = this.domService.module.customClass;
                    if (customClass) {
                        customClass[componentId] = this.classCode;
                    }
                }
                ;
                ClassEditorComponent.prototype.saveClassEditor = function() {
                    var componentId = this.selectCop;
                    if (componentId) {
                        var customClass = this.domService.module.customClass;
                        if (!customClass) {
                            this.domService.module.customClass = {};
                        }
                        customClass[componentId] = this.classCode;
                    }
                }
                ;
                /**
                 *  format editor’s content after initialized
                 */
                ClassEditorComponent.prototype.onMonacoInit = function($event) {
                    this.monacoEditor = $event.editor;
                }
                ;
                ClassEditorComponent = __decorate([Component({
                    selector: 'class-editor',
                    templateUrl: './class-editor.component.html',
                    styleUrls: ['./class-editor.component.css'],
                    providers: []
                }), __metadata("design:paramtypes", [DomService, NgZone])], ClassEditorComponent);
                return ClassEditorComponent;
            }());

            var TemplateOutlineSchemaService = /** @class */
            (function() {
                function TemplateOutlineSchemaService(http, domService) {
                    this.http = http;
                    this.domService = domService;
                }
                /**
                 * 获取当前模板schema
                 * @param type 控件类型
                 */
                TemplateOutlineSchemaService.prototype.getTemplateSchema = function() {
                    var _this = this;
                    var domModule = this.domService.module;
                    try {
                        this.http.get('assets/form/template-schema/' + domModule.templateId + '.json').subscribe(function(data) {
                            if (data && data.length) {
                                _this.domService.templateOutlineSchema = data;
                            }
                        }, function() {
                            console.log('获取模板大纲schema失败，模板ID：' + _this.domService.module.templateId);
                        });
                    } catch (e) {}
                }
                ;
                return TemplateOutlineSchemaService;
            }());

            var FormDesignerComponent = /** @class */
            (function() {
                function FormDesignerComponent(domService, schemaService, dgVMService, controlService, stateMachineService, dataStatesService, modalService, msgService, componentFactoryResolver, http, injector, designerHostSettingService, controlPropertyChangedService, ngZone, dragResolveService, controlCreatorService, refreshFormService, formBasicService, // 事件编辑器集成
                webCmdService) {
                    var _this = this;
                    this.domService = domService;
                    this.schemaService = schemaService;
                    this.dgVMService = dgVMService;
                    this.controlService = controlService;
                    this.stateMachineService = stateMachineService;
                    this.dataStatesService = dataStatesService;
                    this.modalService = modalService;
                    this.msgService = msgService;
                    this.componentFactoryResolver = componentFactoryResolver;
                    this.http = http;
                    this.injector = injector;
                    this.designerHostSettingService = designerHostSettingService;
                    this.controlPropertyChangedService = controlPropertyChangedService;
                    this.ngZone = ngZone;
                    this.dragResolveService = dragResolveService;
                    this.controlCreatorService = controlCreatorService;
                    this.refreshFormService = refreshFormService;
                    this.formBasicService = formBasicService;
                    this.webCmdService = webCmdService;
                    /** 当前右侧显示的视图类型 */
                    this.bottomTabActive = BOTTOM_TAB_TYPE.formDesigner;
                    /** 当前左侧显示的tab页 */
                    this.leftTabActive = LEFT_TAB_TYPE.controlTree;
                    /** 属性面板配置数据 */
                    this.propertyConfig = [];
                    this.ro = null;
                    this.elRef = null;
                    this._roTimer = null;
                    /**
                     * 控件树展示右键菜单前事件：用于组装菜单数据
                     * @param data 控件树右键行数据
                     */
                    this.beforeShowContextMenu = function(rowNode, parentRowNode) {
                        if (!rowNode) {
                            return;
                        }
                        var treeNode = rowNode.node;
                        var showMenu = false;
                        var menus = [];
                        // 获取右键菜单对应的组件实例
                        var menuFocusedComponentInstance;
                        if (parentRowNode) {
                            menuFocusedComponentInstance = _this.componentInstanceList.find(function(instance) {
                                return instance.id === parentRowNode.node.id;
                            });
                        } else {
                            menuFocusedComponentInstance = _this.componentInstanceList.find(function(instance) {
                                return instance.id === treeNode.id;
                            });
                        }
                        if (menuFocusedComponentInstance && menuFocusedComponentInstance.resolveContextMenuConfig) {
                            menus = menuFocusedComponentInstance.resolveContextMenuConfig(rowNode, parentRowNode);
                            if (menus && menus.length) {
                                showMenu = true;
                            }
                        }
                        return {
                            show: showMenu,
                            menus: menus
                        };
                    }
                    ;
                    this.elRef = this.injector.get(ElementRef);
                }
                Object.defineProperty(FormDesignerComponent.prototype, "domJson", {
                    /** 表单完整DOM结构 */
                    get: function() {
                        return this.domService.getDomJson();
                    },
                    enumerable: true,
                    configurable: true
                });
                FormDesignerComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    // 监听外部刷新表单的事件
                    this.refreshFormService.refreshFormDesigner.subscribe(function(targetComponentId) {
                        _this.refreshFormAndTree(targetComponentId);
                    });
                }
                ;
                FormDesignerComponent.prototype.ngOnDestroy = function() {
                    if (this.ro) {
                        this.ro.unobserve(this.elRef.nativeElement);
                        this.ro.disconnect();
                        this.ro = null;
                    }
                }
                ;
                FormDesignerComponent.prototype.render = function(dom) {
                    // 保存DOM
                    this.domService.setDomJson(dom);
                    // 渲染页面
                    this.createDesignBuilder(dom);
                    // 组合ViewModel数据：schema field+VM changeset => dgViewModel
                    this.dgVMService.assembleDesignViewModel();
                    // 事件编辑器集成
                    this.webCmdService.checkCommands();
                    // 获取当前表单所属的模板大纲结构
                    var templateOutlineSchemaService = new TemplateOutlineSchemaService(this.http,this.domService);
                    templateOutlineSchemaService.getTemplateSchema();
                    // 刷新实体树
                    this.schemaTree.refreshTreeData();
                }
                ;
                FormDesignerComponent.prototype.createDesignBuilder = function(domJson) {
                    var _this = this;
                    var elements = document.getElementsByClassName('editorPanel');
                    var rootElement;
                    if (elements && elements.length) {
                        rootElement = elements[0];
                    }
                    if (!DesignerBuilder) {
                        return;
                    }
                    this.addServiceToDevkit();
                    var designerHost = this.addServiceToUI();
                    var childComponents = domJson.module.components.filter(function(component) {
                        return component.type === 'Component' && component.componentType !== 'Page';
                    });
                    var pageComponents = domJson.module.components.filter(function(component) {
                        return component.type === 'Component' && component.componentType === 'Page';
                    });
                    var designerSchema = {
                        contents: pageComponents
                    };
                    this.designBuilder = new DesignerBuilder(rootElement,designerSchema,childComponents,AllComponents,designerHost);
                    this.designBuilder.instance.ready.then(function() {
                        _this.onBuilderReady();
                    });
                    this.designBuilder.instance.on('change', function(changeObject) {
                        _this.onComponentChanged(changeObject);
                    });
                }
                ;
                FormDesignerComponent.prototype.onBuilderReady = function() {
                    this.componentInstanceList = this.designBuilder.instance.getAllComponents();
                    // 更新控件json映射
                    this.domService.updateDomDgMap(this.componentInstanceList);
                    // 重新挂载控件事件
                    this.reAttachComponentEvent(this.componentInstanceList);
                    // 监听容器尺寸变化
                    this.registerResizeListenner();
                }
                ;
                FormDesignerComponent.prototype.onComponentChanged = function(changeObject) {
                    var _this = this;
                    this.onBuilderReady();
                    // 刷新控件树
                    this.controlTree.refreshControlTree();
                    // 重新获取组件实例
                    if (this.focusedComponentInstance) {
                        this.focusedComponentInstance = this.componentInstanceList.find(function(instance) {
                            return instance.id === _this.focusedComponentInstance.id;
                        });
                    }
                }
                ;
                /**
                 * 挂载控件点击事件
                 * @param componentInstanceList 控件实例列表
                 */
                FormDesignerComponent.prototype.reAttachComponentEvent = function(componentInstanceList) {
                    var _this = this;
                    componentInstanceList.forEach(function(cmp) {
                        // 响应点击事件
                        cmp.on('componentClicked', function(data) {
                            _this.onComponentClicked(data);
                        });
                        // 响应清除属性面板事件，常用于控件被移除的场景
                        cmp.on('clearPropertyPanel', function(data) {
                            _this.updatePropertyPanel(null);
                        });
                    });
                }
                ;
                /**
                 * 监听可视化区域的控件点击事件
                 * @param controlComponent 选中的组件实例
                 */
                FormDesignerComponent.prototype.onComponentClicked = function(data) {
                    if (!data || !data.length) {
                        return;
                    }
                    var _a = data[0]
                      , e = _a.e
                      , componentInstance = _a.componentInstance;
                    if (!componentInstance) {
                        return;
                    }
                    // 记录选中的控件实例
                    this.focusedComponentInstance = componentInstance;
                    // 触发选中控件树节点
                    if (e) {
                        this.controlTree.triggerTreeFocus(componentInstance.component.id);
                        // return;
                    }
                    // 触发更新属性面板
                    this.updatePropertyPanel(componentInstance);
                }
                ;
                /**
                 * 触发更新属性面板
                 */
                FormDesignerComponent.prototype.updatePropertyPanel = function(componentInstance) {
                    if (!componentInstance || !componentInstance.component) {
                        this.propertyConfig = [];
                        this.propertyData = {};
                        return;
                    }
                    if (componentInstance.getPropertyConfig) {
                        this.propertyConfig = componentInstance.getPropertyConfig() || [];
                    } else {
                        this.propertyConfig = [];
                    }
                    this.propertyData = componentInstance.component;
                }
                ;
                /**
                 * 将UI中定义的控件相关服务添加到Devkit中
                 */
                FormDesignerComponent.prototype.addServiceToDevkit = function() {
                    var designerHost = new DesignerHost();
                    designerHost.addService('ControlService', this.controlService);
                    designerHost.addService('ControlCreatorService', this.controlCreatorService);
                    designerHost.addService('SchemaDOMMapping', SchemaDOMMapping);
                    this.designerHostSettingService.setDesignerHost(designerHost);
                }
                ;
                /**
                 * 将devkit中定义的服务添加到UI中
                 */
                FormDesignerComponent.prototype.addServiceToUI = function() {
                    var designerHost = new DesignerHost();
                    designerHost.addService('DomService', this.domService);
                    designerHost.addService('SchemaService', this.schemaService);
                    designerHost.addService('DesignViewModelService', this.dgVMService);
                    designerHost.addService('DragResolveService', this.dragResolveService);
                    // 状态机集成
                    designerHost.addService('StateMachineService', this.stateMachineService);
                    // 数据状态集成
                    designerHost.addService('DataStatesService', this.dataStatesService);
                    // 事件编辑器集成
                    designerHost.addService('WebCmdService', this.webCmdService);
                    designerHost.addService('ControlCreatorService', this.controlCreatorService);
                    designerHost.addService('SchemaDOMMapping', SchemaDOMMapping);
                    designerHost.addService('RefreshFormService', this.refreshFormService);
                    designerHost.addService('FormBasicService', this.formBasicService);
                    // 注入公共服务，用于控件中动态创建angular组件
                    designerHost.addService('Injector', this.injector);
                    designerHost.addService('ModalService', this.modalService);
                    designerHost.addService('MessagerService', this.msgService);
                    designerHost.addService('ComponentFactoryResolver', this.componentFactoryResolver);
                    return designerHost;
                }
                ;
                /**
                 * 变更控件树节点
                 * @param node 选中的树节点
                 */
                FormDesignerComponent.prototype.changeControlTreeNode = function(data) {
                    var node = data.treeNode;
                    var dependentTreeNode = data.dependentTreeNode;
                    switch (node.type) {
                        // 表单控件节点
                    case ControlTreeNodeType.Control:
                    case ControlTreeNodeType.Component:
                        {
                            this.updateDOMByMonacoCode();
                            this.clickControlNode(node, dependentTreeNode);
                            break;
                        }
                        // 顶层frame节点
                    case ControlTreeNodeType.Frame:
                        {
                            this.updateDOMByMonacoCode();
                            this.clickFrameTreeNode(node);
                            break;
                        }
                    }
                }
                ;
                /**
                 * 控件树单击组件节点或控件节点
                 */
                FormDesignerComponent.prototype.clickControlNode = function(node, dependentTreeNode) {
                    // 有依赖关系的节点，触发依赖节点的点击事件
                    if (dependentTreeNode) {
                        var componentInstance = this.componentInstanceList.find(function(instance) {
                            return instance.id === dependentTreeNode.data.id;
                        });
                        if (componentInstance.triggerComponentInsideClick) {
                            componentInstance.triggerComponentInsideClick(node);
                        }
                    } else {
                        // 获取节点对应的控件实例，并触发点击事件，从而显示属性面板
                        this.focusedComponentInstance = this.componentInstanceList.find(function(instance) {
                            return instance.id === node.data.id;
                        });
                        if (this.focusedComponentInstance) {
                            this.focusedComponentInstance.triggerComponentClick();
                        }
                    }
                    this.showPage(node, dependentTreeNode);
                    this.updateMonacoCode();
                }
                ;
                /**
                 * 点击控件树顶层表单frame节点
                 */
                FormDesignerComponent.prototype.clickFrameTreeNode = function(node) {
                    this.focusedComponentInstance = null;
                    // 触发显示属性面板
                    var frameProp = new FrameProp(this.injector);
                    var customPropConfig = frameProp.getPropConfig(this.domJson);
                    this.propertyConfig = customPropConfig;
                    this.propertyData = this.domJson;
                    // 移除可视化区域的选定边框
                    var elements = document.getElementsByClassName('dgComponentSelected');
                    if (elements && elements.length > 0) {
                        elements[0].classList.remove('dgComponentSelected');
                    }
                    // 当前显示代码编辑器：获取最新DOM结构并进行格式化
                    if (this.bottomTabActive === BOTTOM_TAB_TYPE.codeEditor) {
                        this.updateMonacoCode();
                    }
                }
                ;
                /**
                 * 展示当前页面
                 * @param node
                 */
                FormDesignerComponent.prototype.showPage = function(node, dependentTreeNode) {
                    var componentWithNode = this.componentInstanceList.find(function(cmp) {
                        return cmp.id === node.id;
                    });
                    if (dependentTreeNode) {
                        componentWithNode = this.componentInstanceList.find(function(cmp) {
                            return cmp.id === dependentTreeNode.data.id;
                        });
                    }
                    var parent = componentWithNode;
                    var component = parent.component;
                    while (component && component.componentType !== 'Page') {
                        parent = parent.parent;
                        component = parent.component;
                    }
                    var pageComponentInstanceList = this.componentInstanceList.filter(function(cmp) {
                        return cmp.component.componentType === 'Page';
                    });
                    pageComponentInstanceList.forEach(function(i) {
                        if (i.element && i.id !== parent.id) {
                            i.element.classList.remove('d-flex');
                            i.element.classList.add('d-none');
                        }
                    });
                    parent.element.classList.remove('d-none');
                    parent.element.classList.add('d-flex');
                }
                ;
                /**
                 * 切换底部tab页
                 */
                FormDesignerComponent.prototype.changeBottomBar = function(key) {
                    // 重复点击无效
                    if (this.bottomTabActive === key) {
                        return;
                    }
                    switch (key) {
                        // 切到代码编辑器
                    case BOTTOM_TAB_TYPE.codeEditor:
                        {
                            this.updateMonacoCode();
                            break;
                        }
                        // 切到样式编辑器
                    case BOTTOM_TAB_TYPE.classEditor:
                        {
                            this.updateDOMByMonacoCode();
                            break;
                        }
                        // 切到可视化设计器
                    case BOTTOM_TAB_TYPE.formDesigner:
                        {
                            this.updateDOMByMonacoCode();
                            this.refreshFormAndTree();
                        }
                    }
                    this.bottomTabActive = key;
                }
                ;
                /**
                 * 刷新页面
                 * @param targetComponentId 需要刷新的目标组件id，若不传，则刷新整个页面
                 */
                FormDesignerComponent.prototype.refreshFormAndTree = function(targetComponentId) {
                    var _this = this;
                    // 组合ViewModel数据：schema field+VM changeset => dgViewModel
                    this.dgVMService.assembleDesignViewModel();
                    // 更新DOM结构和子组件（不可少）
                    var childComponents = this.domJson.module.components.filter(function(component) {
                        return component.type === 'Component' && component.componentType !== 'Page';
                    });
                    var pageComponents = this.domJson.module.components.filter(function(component) {
                        return component.type === 'Component' && component.componentType === 'Page';
                    });
                    var designerSchema = {
                        contents: pageComponents
                    };
                    this.designBuilder.updateChildComponents(designerSchema, childComponents);
                    // 局部重绘
                    if (targetComponentId) {
                        var needToBeRefreshedCmp = this.componentInstanceList.find(function(c) {
                            return c.id === targetComponentId;
                        });
                        if (needToBeRefreshedCmp) {
                            needToBeRefreshedCmp.rebuild().then(function() {
                                _this.onComponentChanged();
                            });
                        }
                    } else {
                        // 整个页面重绘
                        this.designBuilder.instance.rebuild().then(function() {
                            _this.onComponentChanged();
                            // 更新拖拽容器中的实体树和控件树
                            // this.schemaTree.updateTreeNodesInDragula();
                            _this.controlBox.updateCategoryPanelsInDragula();
                        });
                    }
                }
                ;
                /**
                 * 切换左侧标签页
                 */
                FormDesignerComponent.prototype.changeSideBarTabTo = function(panelCode) {
                    this.leftTabActive = panelCode;
                    // 默认切换回可视化设计器，不展示代码编辑器或者设置视图
                    if (this.bottomTabActive !== BOTTOM_TAB_TYPE.formDesigner) {
                        this.bottomTabActive = BOTTOM_TAB_TYPE.formDesigner;
                    }
                }
                ;
                /**
                 * 切换属性面板标签页
                 * @param tabId 标签页id
                 */
                FormDesignerComponent.prototype.onSelectedPropertyTabChanged = function(tabId) {
                    this.selectedPropertyTabId = tabId;
                }
                ;
                /**
                 * 属性变更后事件
                 * @param $event 变更集
                 */
                FormDesignerComponent.prototype.onPropertyChanged = function(changeObject) {
                    this.controlPropertyChangedService.afterPropertyChanged(changeObject, this.propertyData, null, this.focusedComponentInstance);
                    this.updateControlTreeAfterPropertyChanged(changeObject);
                }
                ;
                FormDesignerComponent.prototype.onPropertyModalChanged = function(data) {
                    var changeObject = data.changeObject
                      , parameters = data.parameters;
                    this.controlPropertyChangedService.afterPropertyChanged(changeObject, this.propertyData, parameters, this.focusedComponentInstance);
                    this.updateControlTreeAfterPropertyChanged(changeObject);
                }
                ;
                /**
                 * 刷新控件树
                 * @param changeObject 变更集
                 */
                FormDesignerComponent.prototype.updateControlTreeAfterPropertyChanged = function(changeObject) {
                    // 控件树整体刷新
                    if (changeObject.needRefreshControlTree) {
                        this.controlTree.refreshControlTree();
                    }
                    // 更新控件树节点名称
                    if (changeObject.needUpdateControlTreeNodeName) {
                        var shownName = changeObject.propertyValue && changeObject.propertyValue.trim();
                        if (!changeObject.propertyValue) {
                            shownName = (DgControl[this.propertyData.type] && DgControl[this.propertyData.type].name) || this.propertyData.id;
                        }
                        this.controlTree.updateControlTreeNodeData(this.propertyData.id, {
                            name: shownName
                        });
                    }
                }
                ;
                /**
                 *  代码编辑器初始化后事件，用于格式化代码
                 */
                FormDesignerComponent.prototype.onMonacoInit = function($event) {
                    this.monacoEditor = $event.editor;
                    this.formatMonacoCode();
                }
                ;
                FormDesignerComponent.prototype.formatMonacoCode = function() {
                    var _this = this;
                    if (!this.monacoEditor) {
                        return;
                    }
                    this.ngZone.runOutsideAngular(function() {
                        setTimeout(function() {
                            var action = _this.monacoEditor.getAction('editor.action.formatDocument');
                            if (action) {
                                action.run();
                            }
                        }, 200);
                    });
                }
                ;
                /**
                 * 更新代码编辑绑定数据
                 */
                FormDesignerComponent.prototype.updateMonacoCode = function() {
                    if (this.focusedComponentInstance) {
                        this.monacoCode = JSON.stringify(this.focusedComponentInstance.component);
                    } else {
                        this.monacoCode = this.domJson ? JSON.stringify(this.domJson) : '';
                    }
                    this.formatMonacoCode();
                }
                ;
                /**
                 * 根据代码编辑器修改后的数据，更新表单DOM JSON
                 */
                FormDesignerComponent.prototype.updateDOMByMonacoCode = function() {
                    if (this.bottomTabActive !== BOTTOM_TAB_TYPE.codeEditor) {
                        return;
                    }
                    // TODO  校验数据，若校验失败禁止切换视图
                    if (!this.monacoCode) {
                        return;
                    }
                    // 修改控件domDgMap
                    var newDomJson = JSON.parse(this.monacoCode);
                    if (this.focusedComponentInstance && this.focusedComponentInstance.type !== ControlTreeNodeType.Frame) {
                        var oldDomJson = this.domService.domDgMap.get(this.focusedComponentInstance.id);
                        if (oldDomJson) {
                            Object.assign(oldDomJson, newDomJson);
                            this.updateChildContentsDgMap(newDomJson);
                        }
                    } else {
                        Object.assign(this.domJson, newDomJson);
                    }
                }
                ;
                /**
                 * 根据代码编辑器序列化值更新DOM结构：容器类节点赋值后更新所有子节点DOM结构
                 */
                FormDesignerComponent.prototype.updateChildContentsDgMap = function(newDomJson) {
                    var _this = this;
                    if (Object.keys(newDomJson).includes('contents')) {
                        newDomJson.contents.forEach(function(co) {
                            _this.domService.domDgMap.set(co.id, co);
                            _this.updateChildContentsDgMap(co);
                        });
                    }
                }
                ;
                /**
                 * 保存前准备，主要解决：
                 * 1. 在代码编辑器视图中修改dom后直接点保存的场景。
                 * 2、校验dom中有没有冗余或者无效的代码片段
                 */
                FormDesignerComponent.prototype.prepareBeforeFormSaved = function() {
                    if (this.bottomTabActive === BOTTOM_TAB_TYPE.codeEditor) {
                        this.updateDOMByMonacoCode();
                    }
                    if (this.bottomTabActive === BOTTOM_TAB_TYPE.classEditor) {
                        this.classEditorComponent.saveClassEditor();
                    }
                    return this.checkDocumentValidBeforeSaved();
                }
                ;
                /**
                 * 校验当前DOM结构：若返回提示信息，则阻止表单保存
                 */
                FormDesignerComponent.prototype.checkDocumentValidBeforeSaved = function() {
                    var inValidMsg = '';
                    // 移除弹窗容器导入的组件声明中fileName和filePath为空的记录-----这个是以前的bug引起的无效数据
                    var externalComponents = this.domService.getExternalComponent();
                    externalComponents = externalComponents.filter(function(comp) {
                        if (comp.type === DgControl.ModalContainer.type && comp.contentType === 'form' && !comp.fileName && !comp.filePath) {
                            return false;
                        }
                        return true;
                    });
                    return inValidMsg;
                }
                ;
                /**
                 *  监听容器尺寸变化
                 */
                FormDesignerComponent.prototype.registerResizeListenner = function() {
                    var _this = this;
                    this.ro = new ResizeObserver(function() {
                        if (_this._roTimer) {
                            clearTimeout(_this._roTimer);
                        }
                        _this._roTimer = setTimeout(function() {
                            var selectDom = _this.elRef.nativeElement.querySelector('.dgComponentSelected');
                            if (selectDom) {
                                var toolbar_1 = selectDom.querySelector('.component-btn-group');
                                if (toolbar_1) {
                                    var p = toolbar_1.getBoundingClientRect();
                                    var top_1 = p.top;
                                    var divPanel = toolbar_1.querySelector('div');
                                    if (divPanel) {
                                        divPanel.style.top = top_1 + 'px';
                                    }
                                }
                            }
                        });
                    }
                    );
                    this.ro.observe(this.elRef.nativeElement.querySelector('.editorPanel'));
                }
                ;
                __decorate([ViewChild('controlTree'), __metadata("design:type", ControlTreeComponent)], FormDesignerComponent.prototype, "controlTree", void 0);
                __decorate([ViewChild('controlBox'), __metadata("design:type", ControlBoxComponent)], FormDesignerComponent.prototype, "controlBox", void 0);
                __decorate([ViewChild('schemaTree'), __metadata("design:type", SchemaTreeComponent)], FormDesignerComponent.prototype, "schemaTree", void 0);
                __decorate([ViewChild(ClassEditorComponent), __metadata("design:type", ClassEditorComponent)], FormDesignerComponent.prototype, "classEditorComponent", void 0);
                FormDesignerComponent = __decorate([Component({
                    selector: 'app-form-designer',
                    templateUrl: './form-designer.component.html',
                    styleUrls: ['./form-designer.component.css'],
                    providers: [ControlPropertyChangedService]
                }), __metadata("design:paramtypes", [DomService, SchemaService, DesignViewModelService, ControlService, StateMachineService, DataStatesService, BsModalService, MessagerService, ComponentFactoryResolver, HttpClient, Injector, DesignerHostSettingService, ControlPropertyChangedService, NgZone, DragResolveService, ControlCreatorService, RefreshFormService, FormBasicService, WebCmdService])], FormDesignerComponent);
                return FormDesignerComponent;
            }());

            var environment$1 = {
                production: false,
                SERVER_IP: ''
            };
            var FormMetadataService = /** @class */
            (function() {
                function FormMetadataService(injector) {
                    this.injector = injector;
                    this.notifyService = this.injector.get(NotifyService);
                }
                FormMetadataService.prototype.getFormMetadata = function() {
                    var _this = this;
                    var result = new Subject();
                    var metadataPath = gsp.ide.getParam('id');
                    var uri = metadataPath.replace(/\\/g, '/');
                    var fileName = uri.substring(uri.lastIndexOf('/') + 1);
                    var filePath = uri.substring(1, uri.lastIndexOf('/'));
                    var formBasicServ = this.injector.get(FormBasicService);
                    var envType = this.getQueryVariable('envType');
                    formBasicServ.envType = envType || 'mobileDesigner';
                    var metadataService = this.injector.get(GSPMetadataService);
                    metadataService.LoadMetadata(fileName, filePath).subscribe(function(data) {
                        formBasicServ.formMetaBasicInfo = _this.getFormMetaBasicInfo(data);
                        // formBasicServ.changeFormBasicInfo = new Subject<any>();
                        // formBasicServ.changeFormBasicInfo.subscribe(changeObject => {
                        //     Object.assign(data, changeObject);
                        // });
                        // 兼容Contents 为string和object两种类型的表单
                        var domJson = JSON.parse(data.content).Contents;
                        if (typeof (domJson) === 'string') {
                            domJson = JSON.parse(domJson);
                        }
                        result.next(domJson);
                    }, function() {
                        result.error('获取表单元数据失败');
                    });
                    return result;
                }
                ;
                FormMetadataService.prototype.getMockFormMetadata = function() {
                    var _this = this;
                    var http = this.injector.get(HttpClient);
                    var formBasicServ = this.injector.get(FormBasicService);
                    var result = new Subject();
                    var envType = this.getQueryVariable('envType');
                    formBasicServ.envType = envType || DesignerEnvType.designer;
                    http.get('assets/mock/form.json').subscribe(function(data) {
                        // this.metadataDto = data;
                        formBasicServ.formMetaBasicInfo = _this.getFormMetaBasicInfo(data);
                        // formBasicServ.changeFormBasicInfo = new Subject<any>();
                        // formBasicServ.changeFormBasicInfo.subscribe(changeObject => {
                        //     Object.assign(data, changeObject);
                        // });
                        // 兼容Contents 为string和object两种类型的表单
                        var domJson = JSON.parse(data.content).Contents;
                        if (typeof (domJson) === 'string') {
                            domJson = JSON.parse(domJson);
                        }
                        result.next(domJson);
                    }, function() {
                        result.error('获取表单元数据失败');
                    });
                    return result;
                }
                ;
                /**
                 * 获取url参数
                 * @param variable 参数编号
                 */
                FormMetadataService.prototype.getQueryVariable = function(variable) {
                    var query = window.location.href.substring(window.location.href.indexOf('?') + 1);
                    var vars = query.split('&');
                    for (var _i = 0, vars_1 = vars; _i < vars_1.length; _i++) {
                        var v = vars_1[_i];
                        var pair = v.split('=');
                        if (pair[0] === variable) {
                            return pair[1];
                        }
                    }
                }
                ;
                /**
                 * 获取表单元数据的基本信息
                 */
                FormMetadataService.prototype.getFormMetaBasicInfo = function(dto) {
                    // const dto = this.metadataDto;
                    if (!dto) {
                        return;
                    }
                    var result = omit(dto, 'content');
                    // const result = new MetadataDto(
                    //     dto.id,
                    //     dto.nameSpace,
                    //     dto.code,
                    //     dto.name,
                    //     dto.fileName,
                    //     dto.type,
                    //     dto.bizobjectID,
                    //     dto.relativePath,
                    //     dto.extendProperty,
                    //     '',
                    //     dto.extendable
                    // );
                    return result;
                }
                ;
                /**
                 * 保存表单元数据
                 * @param domJson domJson
                 */
                FormMetadataService.prototype.saveFormData = function(domJson) {
                    var sessionId = gsp.cache.get('sessionId');
                    var formBasicServ = this.injector.get(FormBasicService);
                    var metadataContent = Object.assign({
                        code: null,
                        name: null,
                        Id: formBasicServ.formMetaBasicInfo.id,
                        Contents: JSON.stringify(domJson)
                    });
                    var newDto = Object.assign({}, formBasicServ.formMetaBasicInfo, {
                        content: JSON.stringify(metadataContent)
                    });
                    var metadataService = this.injector.get(GSPMetadataService);
                    return metadataService.SaveMetadata(newDto, sessionId);
                }
                ;
                /**
                 * 获取服务器信息
                 */
                FormMetadataService.prototype.getServerInfo = function() {
                    var http = this.injector.get(HttpClient);
                    return http.get('/api/dev/main/v1.0/debugger/run2env', {
                        headers: new HttpHeaders({
                            'Content-Type': 'text/json',
                            SessionId: gsp.cache.get('sessionId')
                        }),
                        responseType: 'json'
                    });
                }
                ;
                /**
                 * 获取运行环境
                 * @param serverInfo 服务器
                 */
                FormMetadataService.prototype.getServerIP = function(serverInfo) {
                    var serverIP = '';
                    if (!serverInfo) {
                        this.notifyService.error('获取环境信息为空！');
                        return null;
                    }
                    var dep = serverInfo.dep;
                    if (!dep) {
                        return '';
                    }
                    if (dep.status !== 1) {
                        this.notifyService.error('环境【' + dep.name + '】未启动！请在【环境管理】菜单中维护！');
                        return null;
                    }
                    if (dep.name !== 'localhost' && dep.name !== 'current server') {
                        var host = window.location.host;
                        if (host.indexOf(':') > 0) {
                            host = host.slice(0, host.indexOf(':') + 1);
                        }
                        serverIP = window.location.protocol + '//' + window.location.hostname + serverInfo.url;
                    }
                    return serverIP;
                }
                ;
                /**
                 *  获取路由信息
                 */
                FormMetadataService.prototype.getFormRoute = function(type) {
                    var http = this.injector.get(HttpClient);
                    var formBasicServ = this.injector.get(FormBasicService);
                    return http.get(environment$1.SERVER_IP + '/api/dev/main/v1.0/form-debug-uri/form-type', {
                        // return this.http.get(environment.SERVER_IP + '/api/dev/main/v1.0/form-debug-uri', {
                        headers: new HttpHeaders({
                            'Content-Type': 'text/json',
                            SessionId: gsp.cache.get('sessionId')
                        }),
                        params: {
                            formMetadataRelativePath: formBasicServ.formMetaBasicInfo.relativePath,
                            formMetadataId: formBasicServ.formMetaBasicInfo.id,
                            formType: 'mobile'
                        },
                        responseType: 'text'
                    });
                }
                ;
                /**
                 * 编译表单
                 * @param formPath 路径
                 */
                FormMetadataService.prototype.compileForm = function(formPath) {
                    var formBasicServ = this.injector.get(FormBasicService);
                    var http = this.injector.get(HttpClient);
                    var headers = new HttpHeaders({
                        'Content-Type': 'application/json'
                    });
                    var formCode = formBasicServ.formMetaBasicInfo.code;
                    var url = "/api/dev/main/v1.0/frontend-project/babel-build-deploy?projectPath=" + formPath + "&formCode=" + formCode;
                    return http.post(url, null, {
                        headers: headers,
                        observe: 'response'
                    });
                }
                ;
                /**
                 * 解析预览
                 */
                FormMetadataService.prototype.interpretationPreviewGenerate = function() {
                    var formBasicServ = this.injector.get(FormBasicService);
                    var http = this.injector.get(HttpClient);
                    var options = {
                        projectPath: formBasicServ.formMetaBasicInfo.relativePath,
                        formCode: formBasicServ.formMetaBasicInfo.code,
                        useSingleForm: true
                    };
                    var headerOptions = {
                        headers: new HttpHeaders({
                            'Content-Type': 'application/json'
                        })
                    };
                    var url = "/api/dev/main/v1.0/frontend-project/generate-for-interpretation";
                    return http.post(url, options, headerOptions);
                }
                ;
                return FormMetadataService;
            }());

            /**
             * 对表单DOM节点进行适配检查
             */
            var AdaptOldFormService = /** @class */
            (function() {
                function AdaptOldFormService(injector) {
                    this.injector = injector;
                    this.formBasicServ = this.injector.get(FormBasicService);
                    this.domServ = this.injector.get(DomService);
                    this.metadataServ = this.injector.get(GSPMetadataService);
                    this.http = this.injector.get(HttpClient);
                }
                /**
                 * 对DOM节点进行兼容性适配检查
                 */
                AdaptOldFormService.prototype.adaptOldForm = function() {
                    this.adaptOldMoudle();
                    this.adaptOldSchema();
                    this.adaptFormOptions();
                    // 适配表达式
                    if (!this.domServ.module.hasOwnProperty('expressions')) {
                        this.domServ.module.expressions = [];
                    }
                }
                ;
                /**
                 * Module层的属性缺失
                 */
                AdaptOldFormService.prototype.adaptOldMoudle = function() {
                    var _this = this;
                    // 补充表单创建时的模板id---用于表单升级
                    if (!this.domServ.module.templateId && this.domServ.module.bootstrap) {
                        this.domServ.module.templateId = this.domServ.module.bootstrap;
                    }
                    // 设计时：增加表单所在工程名
                    if (this.formBasicServ.envType === DesignerEnvType.designer && !this.domServ.module.projectName && this.formBasicServ.formMetaBasicInfo && this.formBasicServ.formMetaBasicInfo.relativePath) {
                        var paths = this.formBasicServ.formMetaBasicInfo.relativePath.split('/');
                        this.domServ.module.projectName = paths[3];
                    }
                    // 补充组合表单-组件声明-命令所在componentId的缺失
                    if (this.domServ.module.declarations && this.domServ.module.declarations.commands && this.domServ.module.declarations.commands.length) {
                        this.domServ.module.declarations.commands.forEach(function(command) {
                            if (command && !command.componentId) {
                                var pathArray = command.path.split('.');
                                if (pathArray.length > 1) {
                                    var viewModelId_1 = pathArray[pathArray.length - 2];
                                    var cmp = _this.domServ.module.components.find(function(c) {
                                        return c.viewModel === viewModelId_1;
                                    });
                                    if (cmp) {
                                        command.componentId = cmp.id;
                                    }
                                }
                            }
                        });
                    }
                    // 补充组合表单-组件通讯-参数映射-目标参数所在的路径targetPath
                    if (this.domServ.module.subscriptions && this.domServ.module.subscriptions.length) {
                        this.domServ.module.subscriptions.forEach(function(subscription) {
                            if (subscription.targetComponent && subscription.paramMappings && subscription.paramMappings.length) {
                                var targetDeclartion_1 = _this.getDeclarationForSubscriptionTarget(subscription);
                                if (!targetDeclartion_1) {
                                    return;
                                }
                                subscription.paramMappings.forEach(function(paramMapping) {
                                    if (!paramMapping.targetPath && paramMapping.targetCode && targetDeclartion_1.states && targetDeclartion_1.states.length) {
                                        var targetState = targetDeclartion_1.states.find(function(state) {
                                            return state.code === paramMapping.targetCode;
                                        });
                                        paramMapping.targetPath = targetState.path;
                                    }
                                });
                            }
                        });
                    }
                    // 补充页面按钮的配置
                    if (!this.domServ.module.toolbar) {
                        this.domServ.module.toolbar = {
                            items: {},
                            configs: {}
                        };
                    }
                    // 补充页面展示形式
                    if (!this.domServ.module.showType) {
                        this.domServ.module.showType = 'page';
                    }
                }
                ;
                AdaptOldFormService.prototype.getDeclarationForSubscriptionTarget = function(subscription) {
                    var targetComponent;
                    // 引入的外部表单
                    if (this.domServ.module.externalComponents) {
                        targetComponent = this.domServ.module.externalComponents.find(function(c) {
                            return c.id === subscription.targetComponent;
                        });
                        if (targetComponent) {
                            return targetComponent.declarations;
                        }
                    }
                    // 当前表单
                    if (this.formBasicServ && this.formBasicServ.formMetaBasicInfo.code && this.formBasicServ.formMetaBasicInfo.code === subscription.targetComponent) {
                        return this.domServ.module.declarations;
                    }
                }
                ;
                /**
                 * 旧表单增加eapiId。适用于设计时环境
                 */
                AdaptOldFormService.prototype.adaptOldSchema = function() {
                    var _this = this;
                    if (this.formBasicServ.envType !== DesignerEnvType.designer) {
                        return;
                    }
                    var schema = this.domServ.module.schemas[0];
                    if (schema.eapiId) {
                        return;
                    }
                    var subject = new Subject();
                    // 1、schema.id 查询VO实体
                    var sessionId = gsp.cache.get('sessionId');
                    this.metadataServ.GetRefMetadata('', schema.id, sessionId).subscribe(function(data) {
                        if (data) {
                            var voMetadataPath = data.relativePath + "/" + data.fileName;
                            // vo发布dll 获取eapiId
                            _this.http.post('/api/dev/main/v1.0/lookup/publish', '"' + voMetadataPath + '"', {
                                headers: new HttpHeaders({
                                    'Content-Type': 'text/json',
                                    SessionId: gsp.cache.get('sessionId')
                                })
                            }).subscribe(function(res) {
                                if (res.success) {
                                    // 2. 保存状态机
                                    schema.eapiId = res.content.id;
                                }
                                // TODO 触发保存表单
                            });
                        }
                    }, function(error) {
                        subject.next();
                    });
                    return subject;
                }
                ;
                /**
                 * 适配表单配置
                 */
                AdaptOldFormService.prototype.adaptFormOptions = function() {
                    if (!this.domServ.options) {
                        this.domServ.options = {};
                    }
                    if (!this.domServ.options.hasOwnProperty('renderMode')) {
                        this.domServ.options.renderMode = 'compile';
                    }
                }
                ;
                return AdaptOldFormService;
            }());

            /**
             * 发布工作流相关服务
             */
            var FormProcessService = /** @class */
            (function() {
                function FormProcessService(injector) {
                    this.injector = injector;
                    this.domService = this.injector.get(DomService);
                    this.loadingService = this.injector.get(LoadingService);
                    this.notifyService = this.injector.get(NotifyService);
                }
                FormProcessService.prototype.publish = function() {
                    var _this = this;
                    var formBasicServ = this.injector.get(FormBasicService);
                    var http = this.injector.get(HttpClient);
                    var formInfo = formBasicServ.formMetaBasicInfo;
                    var formId = formInfo.id;
                    var path = formInfo.relativePath;
                    var name = formInfo.fileName;
                    var publishUlr = '/api/dev/main/v1.0/form/form-process/form-format';
                    var url = publishUlr + "?path=" + path + "&name=" + name + "&id=" + formId;
                    var loading = this.loadingService.show({
                        container: 'body',
                        message: '发布中，请稍候...'
                    });
                    http.put(url, {}).pipe(tap(function() {
                        _this.domService.options.publishFormProcess = true;
                    })).subscribe(function() {
                        loading.close();
                        _this.notifyService.success('发布成功');
                    }, function(err) {
                        loading.close();
                        if (err.status === 404) {
                            _this.notifyService.error('发布失败。N版环境不支持此操作，请在单J环境下使用。');
                            return;
                        }
                        _this.notifyService.error('发布失败。');
                    });
                }
                ;
                return FormProcessService;
            }());

            /**
             * 更新表单Schema后，同步控件的服务
             */
            var RefreshFormAfterSchemaChangedService = /** @class */
            (function() {
                function RefreshFormAfterSchemaChangedService(injector) {
                    this.injector = injector;
                    this.domService = this.injector.get(DomService);
                    this.schemaService = this.injector.get(SchemaService);
                    this.dgViewModelService = this.injector.get(DesignViewModelService);
                    this.controlCreatorService = this.injector.get(ControlCreatorService);
                }
                /**
                 * 刷新schema后更新DOM结构：原则：变更的属性不在VM.fieldSchema里
                 * @param changes
                 */
                RefreshFormAfterSchemaChangedService.prototype.refreshAfterSchemaChange = function(changes) {
                    var _this = this;
                    var dgViewModels = this.dgViewModelService.getDgViewModels();
                    dgViewModels.forEach(function(dgViewModel) {
                        if (!dgViewModel.fields || dgViewModel.fields.length === 0) {
                            return;
                        }
                        dgViewModel.fields.forEach(function(field) {
                            // 1、 获取当前VM对应的组件中绑定该字段的所有控件
                            var controls = _this.domService.getControlsInCmpWidthBinding(dgViewModel.id, field.id);
                            // 字段不存在：若是table类型，则需要自动移除编辑器
                            if (field.isSchemaRemoved) {
                                _this.updateTableEditorAfterSchemaFieldRemoved(controls, dgViewModel.id);
                            }
                            var fieldChanges = changes[field.id];
                            if (!fieldChanges) {
                                return;
                            }
                            if (!controls && controls.length === 0) {
                                return;
                            }
                            // 2、判断是否需要替换控件：字段类型更改并且后替换控件
                            // udt和关联字段，不要同步，需要手动删除。
                            var typeChange = fieldChanges.find(function(c) {
                                return c.propPath === 'type.$type';
                            });
                            var editorChange = fieldChanges.find(function(c) {
                                return c.propPath === 'editor' || c.propPath === 'editor.$type';
                            });
                            var multiLanguageChange = fieldChanges.find(function(c) {
                                return c.propPath === 'multiLanguage' && c.newValue === true;
                            });
                            // ① 替换控件
                            if (typeChange && editorChange) {
                                _this.changeControlType(controls, field, dgViewModel);
                                return;
                            }
                            // 若多语属性由false-->true，需要替换控件
                            if (multiLanguageChange && editorChange) {
                                _this.changeControlType(controls, field, dgViewModel);
                                return;
                            }
                            // ② 不需要替换控件
                            _this.updateControlsBySchemaChange(fieldChanges, controls, field, dgViewModel.id);
                        });
                    });
                }
                ;
                /**
                 * 对于table中的输入控件，若绑定字段被移除，需要自动清楚单元格的绑定，因为目前table显示视图模型
                 * @param controls
                 * @param viewModelId
                 */
                RefreshFormAfterSchemaChangedService.prototype.updateTableEditorAfterSchemaFieldRemoved = function(controls, viewModelId) {
                    var _this = this;
                    if (controls && controls.length) {
                        var fieldIds_1 = [];
                        controls.forEach(function(control) {
                            if (control.showInTable && control.binding && control.binding.field) {
                                fieldIds_1.push(control.binding.field);
                                _this.assignControlDom(control, {
                                    type: null,
                                    binding: null
                                });
                            }
                        });
                        this.deleteFieldById(viewModelId, fieldIds_1);
                    }
                }
                ;
                /**
                 * 根据控件变更集更新控件。
                 * @param fieldChanges 字段变更集
                 * @param controls 控件列表
                 * @param dgField 字段
                 * @param viewModelId 模型ID
                 */
                RefreshFormAfterSchemaChangedService.prototype.updateControlsBySchemaChange = function(fieldChanges, controls, dgField, viewModelId) {
                    var _this = this;
                    var updateChanges = [];
                    var viewModelField = this.domService.getViewModelFieldById(viewModelId, dgField.id);
                    var fieldSchema = viewModelField.fieldSchema;
                    // ① 收集需要在控件上变更的属性：VM上没有变更记录 或者 变更的属性不在VM的变更记录中
                    if (!fieldSchema) {
                        // 字段没有变更记录
                        updateChanges = updateChanges.concat(fieldChanges);
                    } else {
                        // 判断变更是否在fieldSchema中，若在不更control，若不在，更control(因为表单对控件的变更优先于VO的变更)
                        fieldChanges.forEach(function(change) {
                            var propInVm = get(fieldSchema, change.propPath, 'notFound');
                            if (propInVm === 'notFound') {
                                updateChanges.push(change);
                            }
                        });
                    }
                    if (updateChanges.length === 0) {
                        return;
                    }
                    // ③ 更新control属性
                    controls.forEach(function(control) {
                        var domChangeset = _this.getDomChangeBySchemaChange(control, updateChanges);
                        merge(control, domChangeset);
                        // 若schema bindingField 变更，需要同步viewmodel field中的fieldName值
                        var bindingFieldProp = updateChanges.find(function(c) {
                            return c.propPath === 'bindingField';
                        });
                        if (bindingFieldProp) {
                            viewModelField.fieldName = bindingFieldProp.newValue;
                        }
                        // 数字类型从普通浮点数转为大数字：不更换控件，但要修改控件bigNumber属性
                        if (control.type === DgControl.NumericBox.type) {
                            var bigNumber = updateChanges.find(function(c) {
                                return c.propPath === 'type.$type' && c.newValue.includes('NumericType');
                            });
                            if (bigNumber) {
                                control.bigNumber = bigNumber.newValue === FormSchemaEntityFieldType$Type.BigNumericType;
                            }
                        }
                        if ((control.type === 'GridField' || control.type === 'TreeGridField') && control.editor && control.dataType === 'number') {
                            var bigNumber = updateChanges.find(function(c) {
                                return c.propPath === 'type.$type' && c.newValue.includes('NumericType');
                            });
                            if (bigNumber) {
                                control.editor.bigNumber = bigNumber.newValue === FormSchemaEntityFieldType$Type.BigNumericType;
                            }
                        }
                    });
                }
                ;
                /**
                 * schema变更字段类型后替换DOM控件
                 * @param controls
                 * @param dgField
                 */
                RefreshFormAfterSchemaChangedService.prototype.changeControlType = function(controls, dgField, dgViewModel) {
                    var _this = this;
                    // 删除VM上针对原字段的修改
                    var schema = this.schemaService.getFieldByIDAndVMID(dgField.id, dgViewModel.id);
                    dgViewModel.clearFieldChange(schema.schemaField, dgField);
                    controls.forEach(function(control) {
                        if (dgField.$type === 'ComplexField') {
                            // 复杂字段相关控件由用户在视图模型中手动删除
                            // this.notifyService.warning({
                            //     title: '系统提示', msg: '请删除复杂字段【' + dgField.name + '】相关控件！', timeout: 3000
                            // } as NotifyOptions);
                            // table内的输入控件自动移除单元格的绑定数据
                            if (control.showInTable) {
                                _this.assignControlDom(control, {
                                    type: null,
                                    binding: null
                                });
                                _this.deleteFieldById(dgViewModel.id, [dgField.id]);
                            }
                            return;
                        }
                        if (control.type === DgControl.GridField.type || control.type === DgControl.TreeGridField.type) {
                            var editable = control.editor ? true : false;
                            var metadata = _this.controlCreatorService.createGridFieldBySchemaFeild(dgField, '', editable, control.type, control.controlSource);
                            // 保留原id、dataField
                            metadata.id = control.id;
                            metadata['dataField'] = control.dataField;
                            if (editable) {
                                metadata['editor']['id'] = control.editor.id;
                            }
                            // 仍使用原来的controlSource和frozen属性
                            if (control.controlSource) {
                                metadata.controlSource = control.controlSource;
                            }
                            if (control.frozen) {
                                metadata.frozen = control.frozen;
                            }
                            _this.assignControlDom(control, metadata);
                        } else {
                            var metadata = void 0;
                            if (control.showInTable) {
                                metadata = _this.controlCreatorService.createTableTdControlBySchemaFeild(dgField, '');
                            } else {
                                metadata = _this.controlCreatorService.createControlBySchemaFeild(dgField, '');
                            }
                            // 保留原id、name、样式
                            metadata.id = control.id;
                            metadata['title'] = control['title'];
                            // metadata.disable = control.disable;
                            metadata['appearance'] = control.appearance;
                            metadata['readonly'] = control.readonly;
                            _this.assignControlDom(control, metadata);
                        }
                    });
                }
                ;
                /**
                 * 根据schema的变更获取DOM对应的变更
                 * @param controlDom 控件DOM
                 * @param changeObjects schema变更集合
                 */
                RefreshFormAfterSchemaChangedService.prototype.getDomChangeBySchemaChange = function(controlDom, changeObjects) {
                    var schemaChangePaths = changeObjects.map(function(c) {
                        return c.propPath;
                    });
                    var mappingArray = SchemaDOMMapping.mappingDomPropAndSchemaProp(controlDom);
                    var domChangeset = {};
                    mappingArray.map(function(m) {
                        if (schemaChangePaths.includes(m.schemaField)) {
                            var changeObject = changeObjects.find(function(c) {
                                return c.propPath === m.schemaField;
                            });
                            // 只读、必填属性单独处理： 需要同步的场景有：1、控件设置为boolean时（状态机、表达式等不更新）2、vo上属性由false改成true
                            if (m.schemaField === 'readonly') {
                                if (typeof (controlDom.readonly) === 'boolean' || changeObject.newValue === true) {
                                    set(domChangeset, m.domField, changeObject.newValue);
                                }
                            } else if (m.schemaField === 'require') {
                                if (typeof (controlDom.require) === 'boolean' || changeObject.newValue === true) {
                                    set(domChangeset, m.domField, changeObject.newValue);
                                }
                            } else {
                                set(domChangeset, m.domField, changeObject.newValue);
                            }
                        }
                    });
                    return domChangeset;
                }
                ;
                RefreshFormAfterSchemaChangedService.prototype.assignControlDom = function(oldControlDom, metadata) {
                    for (var _i = 0, _a = Object.keys(oldControlDom); _i < _a.length; _i++) {
                        var key = _a[_i];
                        delete oldControlDom[key];
                    }
                    Object.assign(oldControlDom, metadata);
                }
                ;
                /**
                 * 根据VMID和字段ID删除字段
                 * @param viewModelId VMID
                 * @param fieldIdList 字段ID列表
                 */
                RefreshFormAfterSchemaChangedService.prototype.deleteFieldById = function(viewModelId, fieldIdList) {
                    var dgViewModel = this.dgViewModelService.getDgViewModel(viewModelId);
                    if (!dgViewModel) {
                        return;
                    }
                    dgViewModel.removeField(fieldIdList);
                }
                ;
                return RefreshFormAfterSchemaChangedService;
            }());

            var UpdateElement = /** @class */
            (function() {
                function UpdateElement() {}
                /**
                 * 更新视图元素
                 * @param element GSPViewModelElement
                 * @param field string
                 * @param value string
                 */
                UpdateElement.update = function(element, field, value) {
                    switch (field) {
                    case CmElementConst.Code:
                        this.updateElmentCode(element, value);
                        break;
                    case CmElementConst.MDataType:
                        this.updateElmentMDataType(element, value);
                        break;
                    default:
                        element[field] = value;
                        break;
                    }
                }
                ;
                /**
                 * 切换字段数据类型
                 * @param elment GSPViewModelElement
                 * @param value GSPElementDataType
                 */
                UpdateElement.updateElmentMDataType = function(elment, value) {
                    elment[CmElementConst.MDataType] = value;
                    if (elment[CmElementConst.ObjectType] === "Enum") {
                        switch (value) {
                        case "Integer":
                            if (elment.EnumIndexType === EnumIndexType$1.String) {
                                elment[CmElementConst.EnumIndexType] = EnumIndexType$1.Integer;
                            }
                            break;
                        default:
                            this.updateElmentObjectType(elment, GSPElementObjectType.None);
                        }
                    }
                    // 切换字段数据类型，若不是文本类型，则设置是否多语为否
                    if (value !== "String" && value !== "Text") {
                        elment[CmElementConst.IsMultiLanguage] = false;
                    }
                    // 若调整数据类型，则长度精度随之改变
                    var length = GSPElementDataTypes.find(function(item) {
                        return item.value === value;
                    }).length;
                    var precision = GSPElementDataTypes.find(function(item) {
                        return item.value === value;
                    }).precision;
                    elment[CmElementConst.Length] = length;
                    elment[CmElementConst.Precision] = precision;
                }
                ;
                /**
                 * 修改字段Code
                 * @param elment GSPViewModelElement
                 * @param value string
                 */
                UpdateElement.updateElmentCode = function(elment, value) {
                    elment.Code = value;
                    elment.LabelID = value;
                }
                ;
                /**
                 * 修改字段对象类型
                 * @param elment
                 * @param value
                 */
                UpdateElement.updateElmentObjectType = function(elment, value) {
                    if (value !== GSPElementObjectType.Enum) {
                        elment[CmElementConst.ContainEnumValues] = [];
                    }
                    if (value !== GSPElementObjectType.Association) {
                        elment[CmElementConst.ChildAssociations] = [];
                    }
                }
                ;
                return UpdateElement;
            }());

            var VoMetadataHttpService = /** @class */
            (function() {
                function VoMetadataHttpService(http, messageService) {
                    this.http = http;
                    this.messageService = messageService;
                    this.sessionId = gsp.cache.get("sessionId");
                    this.currentUrl = "";
                    this.currentPath = "";
                    this.vmBaseUrl = "" + this.currentUrl + "/api/dev/main/v1.0/viewmodel";
                    this.getRefBeObjUrl = this.vmBaseUrl + "/getbizObject/";
                    this.convertBizElementIds = this.vmBaseUrl + "/convertBeElements";
                }
                VoMetadataHttpService.prototype.setCurrentPath = function(path) {
                    this.currentPath = path;
                }
                ;
                /**
                 * 保存前校验vo
                 * @returns
                 */
                VoMetadataHttpService.prototype.checkvo = function(vm) {
                    var url = "/api/dev/main/v1.0/bff/checkvo";
                    return this.http.put(url, vm);
                }
                ;
                /**
                 * @returns sessionId
                 */
                VoMetadataHttpService.prototype.getHeadersWithSessionId = function() {
                    var headers = new HttpHeaders().set("SessionId", this.sessionId);
                    headers.append("sessionId", this.sessionId);
                }
                ;
                /**
                 * 根据beid及bizObjId读取bizObj
                 * @returns Observable<any>
                 */
                VoMetadataHttpService.prototype.getRefObjctByID = function(beMetadataID, bizObjID, bePkgName) {
                    if (!beMetadataID || beMetadataID.length === 0) {
                        this.messageService.info("业务实体元数据ID为空。");
                        return;
                    }
                    if (!bizObjID || bizObjID.length === 0) {
                        this.messageService.info("当前对象对应的业务实体对象ID为空。");
                        return;
                    }
                    var path = this.currentPath;
                    var url = this.getRefBeObjUrl + (beMetadataID + "/" + bizObjID + "?path=" + path + "&&bePkgName=" + bePkgName);
                    var headers = this.getHeadersWithSessionId();
                    return this.http.get(url, {
                        headers: headers
                    });
                }
                ;
                /**
                 * be实体转换为视图实体
                 * @param elementIds 需要转换元素id数组
                 * @returns Observable<any>
                 */
                VoMetadataHttpService.prototype.convertBizElementIdsToViewElements = function(elementIds, beMetadataID, bizObjID, bePkgName) {
                    var info = {
                        beEleIds: JSON.stringify(elementIds),
                        bePkgName: bePkgName,
                        beId: beMetadataID,
                        objId: bizObjID,
                    };
                    var url = this.convertBizElementIds;
                    var headers = this.getHeadersWithSessionId();
                    return this.http.put(url, info, {
                        headers: headers
                    });
                }
                ;
                return VoMetadataHttpService;
            }());

            var VoMetadataService = /** @class */
            (function() {
                function VoMetadataService(http, metadataService, messageService, injector) {
                    this.http = http;
                    this.metadataService = metadataService;
                    this.messageService = messageService;
                    this.injector = injector;
                    // 实体对象树
                    this.objectTreeData = [];
                    this.voMetadataHttpService = new VoMetadataHttpService(this.http,this.messageService);
                }
                Object.defineProperty(VoMetadataService.prototype, "elements", {
                    // 当前选中实体对象字段
                    get: function() {
                        return this.currentMainObject && this.currentMainObject.ContainElements ? this.currentMainObject.ContainElements : [];
                    },
                    set: function(value) {
                        this.currentMainObject.ContainElements = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VoMetadataService.prototype, "bePkgName", {
                    // 当前选中实体对象映射BE包名
                    get: function() {
                        return this.currentMainObject.Mapping.TargetMetadataPkgName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VoMetadataService.prototype, "beMetadataID", {
                    // 当前选中实体对象映射BE-ID
                    get: function() {
                        return this.currentMainObject.Mapping.TargetMetadataId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VoMetadataService.prototype, "bizObjID", {
                    // 当前选中实体对象映射业务对象ID
                    get: function() {
                        return this.currentMainObject.Mapping.TargetObjId;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * 初始化加载VO元数据
                 * @returns Observable<void>
                 */
                VoMetadataService.prototype.getVoMetadata = function() {
                    var _this = this;
                    var $subject = new Subject();
                    var metadataPath = gsp.ide.getParam("id");
                    var uri = metadataPath.replace(/\\/g, "/");
                    var frmName = uri.substring(uri.lastIndexOf("/") + 1);
                    var voName = frmName.replace(".", "_") + ".vo";
                    var path = uri.substring(1, uri.lastIndexOf("/"));
                    this.metadataService.LoadMetadata(voName, path).subscribe(function(data) {
                        _this.initViewModel(data);
                        $subject.next();
                    }, function() {
                        $subject.error("获取VO元数据失败");
                    });
                    return $subject;
                }
                ;
                /**
                 * 保存前校验vo
                 * @returns
                 */
                VoMetadataService.prototype.checkvo = function() {
                    return this.voMetadataHttpService.checkvo(this.vm);
                }
                ;
                /**
                 * 保存修改后的Vo元数据
                 * @returns Observable<any>
                 */
                VoMetadataService.prototype.saveVoMetadata = function(loading) {
                    var _this = this;
                    return this.checkvo().pipe(switchMap(function() {
                        _this.dto.content = JSON.stringify(_this.vm);
                        return _this.metadataService.SaveMetadata(_this.dto, "").pipe(tap(null, function(res) {
                            var _a = (res.error || {}).Message
                              , Message = _a === void 0 ? "实体保存失败" : _a;
                            var message = Message.replace(/\n/g, "<br />");
                            _this.messageService.show("error", message, {
                                title: "实体保存失败",
                                safeHtml: false,
                            });
                            loading.close();
                        }), switchMap(function() {
                            return _this.getVoMetadata();
                        }));
                    }));
                }
                ;
                /**
                 * 根据beid及bizObjId读取bizObj
                 * @returns Observable<any>
                 */
                VoMetadataService.prototype.getRefObjctByID = function() {
                    return this.voMetadataHttpService.getRefObjctByID(this.beMetadataID, this.bizObjID, this.bePkgName);
                }
                ;
                /**
                 * be实体转换为视图实体
                 * @param elementIds 需要转换元素id数组
                 * @returns Observable<any>
                 */
                VoMetadataService.prototype.convertBizElementIdsToViewElements = function(elementIds) {
                    return this.voMetadataHttpService.convertBizElementIdsToViewElements(elementIds, this.beMetadataID, this.bizObjID, this.bePkgName);
                }
                ;
                /**
                 * 同步表单Schema
                 * @returns void
                 */
                VoMetadataService.prototype.synchronizeVO = function() {
                    var refreshAfterChangedServ = new RefreshFormAfterSchemaChangedService(this.injector);
                    var updateSchemaService = new UpdateFormSchemaService(this.injector);
                    updateSchemaService.synchronizeVOByContent(refreshAfterChangedServ, this.vm);
                }
                ;
                /**
                 * 初始化视图模型数据
                 * @param dto
                 */
                VoMetadataService.prototype.initViewModel = function(dto) {
                    this.dto = dto;
                    this.voMetadataHttpService.setCurrentPath(dto.relativePath);
                    this.vm = JSON.parse(dto.content);
                    // this.vm['extendable'] = dto.extendable;
                    // this.viewModel = new ViewModel(this.vm);
                    this.objectTreeData = this.vm.MainObject ? [this.createTreeNode(this.vm.MainObject, null)] : [];
                    this.currentMainObject = this.vm.MainObject;
                }
                ;
                /**
                 * 设置当前节点视图数据
                 * @param vmObject GSPViewObject
                 */
                VoMetadataService.prototype.setCurrentMainObject = function(vmObject) {
                    this.currentMainObject = vmObject;
                }
                ;
                /**
                 * 更新可编辑列表修改后的实体数据
                 * @param index
                 * @param elment
                 */
                VoMetadataService.prototype.updateElment = function(index, elment) {
                    this.elements[index];
                    var row = this.elements[index];
                    var field = elment.field
                      , value = elment.value;
                    UpdateElement.update(row, field, value);
                }
                ;
                /**
                 * 转化视图为树形列表所需数据结构
                 * @param viewObject GSPViewObject
                 * @param parentNode TreeNode
                 * @returns TreeNode
                 */
                VoMetadataService.prototype.createTreeNode = function(viewObject, parentNode) {
                    var _this = this;
                    var node = {
                        id: viewObject.ID,
                        parent: parentNode,
                        children: [],
                        data: {
                            id: viewObject.ID,
                            name: viewObject.Name,
                            vmobject: viewObject,
                        },
                    };
                    var childObjects = viewObject.ContainChildObjects;
                    if (childObjects && childObjects.length > 0) {
                        childObjects.forEach(function(obj) {
                            node.children.push(_this.createTreeNode(obj, node));
                        });
                    }
                    return node;
                }
                ;
                VoMetadataService.ngInjectableDef = defineInjectable({
                    factory: function VoMetadataService_Factory() {
                        return new VoMetadataService(inject(HttpClient),inject(GSPMetadataService),inject(MessagerService),inject(INJECTOR));
                    },
                    token: VoMetadataService,
                    providedIn: "root"
                });
                VoMetadataService = __decorate([Injectable({
                    providedIn: "root",
                }), __metadata("design:paramtypes", [HttpClient, GSPMetadataService, MessagerService, Injector])], VoMetadataService);
                return VoMetadataService;
            }());

            var FormEditorComponent = /** @class */
            (function() {
                function FormEditorComponent(injector, notifyService, domService, modalService, loadingService, msgService, formBasicService, resolver, stateMachineService, dataStatesService, // 事件编辑器集成
                webCmdService, voMetadataService) {
                    var _this = this;
                    this.injector = injector;
                    this.notifyService = notifyService;
                    this.domService = domService;
                    this.modalService = modalService;
                    this.loadingService = loadingService;
                    this.msgService = msgService;
                    this.formBasicService = formBasicService;
                    this.resolver = resolver;
                    this.stateMachineService = stateMachineService;
                    this.dataStatesService = dataStatesService;
                    this.webCmdService = webCmdService;
                    this.voMetadataService = voMetadataService;
                    /** 切换设计器/代码视图 */
                    this.switchView = new EventEmitter();
                    /** 当前展示视图：页面（formDesigner）、实体（entityDesi gner） */
                    this.showDesignerType = 'formDesigner';
                    this.metadaService = new FormMetadataService(injector);
                    this.metadaService.getFormMetadata().subscribe(function(domJson) {
                        _this.formDesigner.render(domJson);
                        // 事件编辑器集成，必须在render函数生成参数列表之后
                        // this.webCmdService.getParamters(domJson);
                        // // 状态机集成
                        // const relativePath = this.formBasicService.formMetaBasicInfo.relativePath;
                        // this.stateMachineService.getMetadata(domJson, relativePath).subscribe(result => {
                        //     // 状态机原数组
                        //     if (result) {
                        //         this.stateMachineMetaData = cloneDeep(this.stateMachineService.getAllStates(result));
                        //     } else {
                        //         this.stateMachineMetaData = [];
                        //     }
                        // });
                        // 数据状态集成
                        _this.dataStates = cloneDeep(_this.dataStatesService.getDomJson(domJson));
                        _this.initForm();
                    });
                }
                FormEditorComponent.prototype.initForm = function() {
                    this.markInvalidCommands();
                    var adaptFormService = new AdaptOldFormService(this.injector);
                    adaptFormService.adaptOldForm();
                    // this.multiViewManageService.newCrosstabViewIds = [];
                    // this.formService.getTemplateSchema();
                }
                ;
                /**
                 * 标记当前DOM中存在，但命令构件中已移除的命令。
                 */
                FormEditorComponent.prototype.markInvalidCommands = function() {}
                ;
                FormEditorComponent.prototype.onChangeShowDesigner = function(type) {
                    this.showDesignerType = type;
                }
                ;
                FormEditorComponent.prototype.refreshWebCmdAfterCodeViewSaved = function() {
                    this.webCmdService.checkCommands();
                }
                ;
                /**
                 * 保存表单
                 */
                FormEditorComponent.prototype.saveForm = function() {
                    var _this = this;
                    var loading = this.loadingService.show({
                        container: 'body',
                        message: '保存中，请稍候...'
                    });
                    this.voMetadataService.saveVoMetadata(loading).pipe(switchMap(function() {
                        return _this.saveFormMetadata(loading);
                    })).subscribe(function(result) {
                        if (result) {
                            _this.notifyService.success('表单保存成功！');
                        }
                    });
                }
                ;
                /**
                 * 校验并保存表单元数据
                 */
                FormEditorComponent.prototype.saveFormMetadata = function(loading) {
                    var _this = this;
                    var subject = new Subject();
                    var inValidMsg = this.formDesigner.prepareBeforeFormSaved();
                    if (inValidMsg) {
                        this.notifyService.warning(inValidMsg);
                        return of(false);
                    }
                    var domJson = this.domService.getDomJson();
                    this.metadaService.saveFormData(domJson).subscribe(function() {
                        // this.multiViewManageService.addVOActionsForCrosstabView();
                        subject.next(true);
                        if (loading) {
                            loading.close();
                        }
                    }, function(error) {
                        subject.next(false);
                        _this.handleErrorMessage(error, '表单保存失败！');
                        if (loading) {
                            loading.close();
                        }
                    });
                    return subject;
                }
                ;
                /**
                 * 截取保存表单的错误提示
                 */
                FormEditorComponent.prototype.handleErrorMessage = function(error, notifyMsg) {
                    if (error && error._body) {
                        var befErrorToken = '#GSPBefError#';
                        var befMsg = JSON.parse(error._body).Message;
                        if (befMsg && befMsg.includes(befErrorToken)) {
                            var message = befMsg.split(befErrorToken);
                            var errorMessage = message[1];
                            this.msgService.error(errorMessage);
                            return;
                        }
                    }
                    this.notifyService.error(notifyMsg);
                }
                ;
                /**
                 *  另存为
                 */
                FormEditorComponent.prototype.saveFormAs = function() {
                    if (this.domService.module.isComposedFrm) {
                        this.notifyService.warning('暂不支持组合表单另存为');
                        return;
                    }
                    var self = this;
                    self.formSaveAsComponent.show();
                }
                ;
                /**
                 * 配置外部模块
                 */
                FormEditorComponent.prototype.manageExtraModule = function() {
                    var _this = this;
                    var compFactory = this.resolver.resolveComponentFactory(ItemCollectionEditorComponent);
                    var compRef = compFactory.create(this.injector);
                    compRef.instance.editorParams = {
                        modalTitle: '外部模块',
                        columns: [{
                            field: 'name',
                            title: '模块名称',
                            editor: {
                                type: EditorTypes.TEXTBOX
                            }
                        }, {
                            field: 'path',
                            title: '模块路径',
                            editor: {
                                type: EditorTypes.TEXTBOX
                            }
                        }],
                        requiredFields: ['name', 'path'],
                        uniqueFields: ['name', 'path'],
                        canEmpty: true
                    };
                    var modalConfig = {
                        title: '外部模块',
                        width: 900,
                        height: 500,
                        showButtons: true,
                        buttons: compRef.instance.modalFooter
                    };
                    compRef.instance.value = this.domService.extraImports || [];
                    var modalPanel = this.modalService.show(compRef, modalConfig);
                    compRef.instance.closeModal.subscribe(function() {
                        modalPanel.close();
                    });
                    compRef.instance.submitModal.subscribe(function(data) {
                        if (data) {
                            _this.domService.extraImports = data.value;
                            modalPanel.close();
                        }
                    });
                }
                ;
                /**
                 * 运行：先保存再运行
                 */
                FormEditorComponent.prototype.runForm = function() {
                    var _this = this;
                    var loading = this.loadingService.show({
                        container: 'body'
                    });
                    this.saveFormMetadata().subscribe(function(saveResult) {
                        if (!saveResult) {
                            loading.close();
                            return;
                        }
                        _this.metadaService.getServerInfo().subscribe(function(serverInfo) {
                            var serverIP = _this.metadaService.getServerIP(serverInfo);
                            if (serverIP === null) {
                                loading.close();
                                return;
                            }
                            _this.metadaService.getFormRoute().subscribe(function(data) {
                                if (data) {
                                    var pageFlowRoute = data.slice(data.lastIndexOf('#') + 1, data.length);
                                    if (!pageFlowRoute) {
                                        _this.notifyService.error('获取路由为空，请检查是否配置页面流！');
                                    } else {
                                        serverIP === '' ? window.open(serverIP + '/platform/common/web/debug/index.html?url=' + data) : window.open(serverIP + '&redUrl=' + encodeURIComponent(data));
                                    }
                                } else {
                                    _this.notifyService.error('获取路由为空！');
                                }
                                loading.close();
                            }, function(error) {
                                loading.close();
                                _this.handleErrorMessage(error, '表单运行失败！');
                            });
                        }, function(error) {
                            loading.close();
                            _this.handleErrorMessage(error, '获取运行环境失败！');
                        });
                    });
                }
                ;
                /**
                 * 编译并预览
                 */
                FormEditorComponent.prototype.compileAndPreviewForm = function() {
                    var _this = this;
                    if (this.domService.options && this.domService.options.renderMode === 'dynamic') {
                        this.dynamicPreview();
                        return;
                    }
                    // 包含路由组件的表单 暂不支持预览
                    var domJson = this.domService.getDomJson();
                    var componentStr = JSON.stringify(domJson.module.components);
                    if (componentStr.includes(DgControl.RouteContainer.type)) {
                        this.notifyService.warning('暂不支持预览包含子路由的表单');
                        return;
                    }
                    var formPath = this.formBasicService.formMetaBasicInfo.relativePath;
                    var loading = this.loadingService.show({
                        container: 'body',
                        message: '编译中，请稍候...'
                    });
                    var metadataService = this.injector.get(GSPMetadataService);
                    var serverIP = '';
                    metadataService.GetProjPath(formPath).pipe(switchMap(function(projectPath) {
                        return _this.metadaService.compileForm(projectPath + '/metadata');
                    }), switchMap(function() {
                        return _this.metadaService.getServerInfo();
                    }), tap(function(serverInfo) {
                        serverIP = _this.metadaService.getServerIP(serverInfo);
                    }), switchMap(function() {
                        return _this.metadaService.getFormRoute('preview');
                    })).subscribe({
                        next: function(uri) {
                            if (uri) {
                                var modifiedUri = uri.replace('/index.html', 'forbabel/index.html');
                                var pageflowRoute = uri.slice(uri.lastIndexOf('#') + 1, uri.length);
                                if (!pageflowRoute) {
                                    var hashIndex = modifiedUri.lastIndexOf('#');
                                    var routeUri = _this.formBasicService.formMetaBasicInfo.code;
                                    if (hashIndex === -1) {
                                        modifiedUri = modifiedUri + '#' + routeUri;
                                    } else if (hashIndex === modifiedUri.length - 1) {
                                        modifiedUri = modifiedUri + routeUri;
                                    }
                                }
                                serverIP === '' ? window.open(serverIP + '/platform/common/web/debug/index.html?url=' + modifiedUri) : window.open(serverIP + '&redUrl=' + encodeURIComponent(modifiedUri));
                            } else {
                                _this.notifyService.error('获取路由信息失败！');
                            }
                        },
                        error: function(err) {
                            _this.notifyService.error('编译表单失败，请检查详细信息');
                            console.error(err);
                            loading.close();
                        },
                        complete: function() {
                            loading.close();
                        }
                    });
                }
                ;
                /**
                 * 解析型预览
                 */
                FormEditorComponent.prototype.dynamicPreview = function() {
                    var _this = this;
                    var loading = this.loadingService.show({
                        container: 'body',
                        message: '解析中，请稍候...'
                    });
                    // 先保存
                    this.saveFormMetadata().subscribe(function(saveResult) {
                        if (!saveResult) {
                            loading.close();
                            return;
                        }
                        _this.metadaService.interpretationPreviewGenerate().subscribe(function(data) {
                            if (data) {
                                var code = data.code
                                  , message = data.message;
                                if (code === 1) {
                                    loading.close();
                                    var metadataPath = gsp.ide.getParam('id');
                                    window.open('/platform/dev/main/web/webide/plugins/farris-render-preview/index.html?url=' + metadataPath);
                                } else {
                                    _this.msgService.error(message || '预览失败');
                                    loading.close();
                                }
                            } else {
                                _this.notifyService.error('预览失败');
                                loading.close();
                            }
                        }, function() {
                            _this.notifyService.error('预览失败');
                            loading.close();
                        });
                    });
                }
                ;
                /**
                 * 发布菜单
                 */
                FormEditorComponent.prototype.publishMenu = function() {
                    var _this = this;
                    var compFactory = this.resolver.resolveComponentFactory(PublishMenuComponent);
                    var compRef = compFactory.create(this.injector);
                    var modalConfig = {
                        title: '发布菜单',
                        width: 600,
                        height: 520,
                        showButtons: true,
                        buttons: compRef.instance.modalFooter
                    };
                    this.metadaService.getFormRoute().pipe(map(function(str) {
                        return str.split('#')[0] + 'index.html';
                    })).subscribe(function(path) {
                        compRef.instance.publishPath = path;
                        var modalPanel = _this.modalService.show(compRef, modalConfig);
                        compRef.instance.closeModal.subscribe(function() {
                            modalPanel.close();
                        });
                        compRef.instance.submitModal.subscribe(function(data) {
                            if (data) {
                                modalPanel.close();
                            }
                        });
                    }, function() {
                        console.log('获取路由信息失败！');
                    });
                }
                ;
                /**
                 * 发布工作流
                 */
                FormEditorComponent.prototype.publishWorkflow = function() {
                    var wfService = new FormProcessService(this.injector);
                    wfService.publish();
                }
                ;
                FormEditorComponent.prototype.onClickCodeEditor = function() {
                    this.switchView.emit();
                }
                ;
                __decorate([Output(), __metadata("design:type", Object)], FormEditorComponent.prototype, "switchView", void 0);
                __decorate([ViewChild(FormDesignerComponent), __metadata("design:type", FormDesignerComponent)], FormEditorComponent.prototype, "formDesigner", void 0);
                __decorate([ViewChild(FormSaveAsComponent), __metadata("design:type", FormSaveAsComponent)], FormEditorComponent.prototype, "formSaveAsComponent", void 0);
                FormEditorComponent = __decorate([Component({
                    selector: 'webide-form-editor',
                    templateUrl: './form-editor.component.html',
                    styleUrls: ['./form-editor.component.css'],
                    providers: [VoMetadataService]
                }), __metadata("design:paramtypes", [Injector, NotifyService, DomService, BsModalService, LoadingService, MessagerService, FormBasicService, ComponentFactoryResolver, StateMachineService, DataStatesService, WebCmdService, VoMetadataService])], FormEditorComponent);
                return FormEditorComponent;
            }());

            var AppComponent = /** @class */
            (function() {
                function AppComponent(notifyService, webCmdService) {
                    var _this = this;
                    this.notifyService = notifyService;
                    this.webCmdService = webCmdService;
                    this.title = 'form-designer';
                    /** 界面展示类型：formEditor表单设计器；codeEditor构件编辑器 */
                    this.showType = 'formEditor';
                    this.metadataPath = gsp.ide.getParam('id');
                    this.webCmdService.webCmpBuilderService.openCodeViewWithNewMethod.subscribe(function(tsFilePath) {
                        if (tsFilePath) {
                            // 收起导航面板
                            _this.codeViewComponent.toggleNavPanel(true);
                            // 触发刷新代码视图的文件树
                            _this.codeViewComponent.refreshNavTree(tsFilePath);
                            // 触发打开新创建的ts代码编辑器
                            _this.codeViewComponent.open(tsFilePath);
                            // 触发新增方法
                            _this.codeViewComponent.sendNotification(tsFilePath, {
                                eventName: 'AddNewMethod'
                            });
                            // 切换到代码视图
                            _this.showType = 'codeEditor';
                        }
                    });
                }
                /**
                 * 切换视图类型
                 * @param type  视图类型
                 * @param tsFilePath ts文件路径，用于设计器中新建构件后触发打开ts代码
                 */
                AppComponent.prototype.changeViewType = function(type, tsFilePath) {
                    this.showType = type;
                }
                ;
                /**
                 * 表单保存后触发代码视图的保存
                 */
                AppComponent.prototype.onFormSaved = function() {// this.codeViewComponent.save(false);
                }
                ;
                /**
                 * 保存代码视图
                 */
                AppComponent.prototype.onCodeEditorSaved = function(results) {
                    console.log('----Code View Save All Results:', results);
                    // 保存代码视图后刷新web构件
                    this.formViewComponent.refreshWebCmdAfterCodeViewSaved();
                }
                ;
                __decorate([ViewChild(CodeViewComponent), __metadata("design:type", CodeViewComponent)], AppComponent.prototype, "codeViewComponent", void 0);
                __decorate([ViewChild(FormEditorComponent), __metadata("design:type", FormEditorComponent)], AppComponent.prototype, "formViewComponent", void 0);
                AppComponent = __decorate([Component({
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                }), __metadata("design:paramtypes", [NotifyService, WebCmdService])], AppComponent);
                return AppComponent;
            }());

            var FormSettingsComponent = /** @class */
            (function() {
                function FormSettingsComponent(domServ, notifyServ, msgServ) {
                    this.domServ = domServ;
                    this.notifyServ = notifyServ;
                    this.msgServ = msgServ;
                    // 支持静态文本属性的控件
                    this.inputControlWithTextArea = [DgControl.TextBox.type, DgControl.MultiTextBox.type, DgControl.NumericBox.type, DgControl.DateBox.type, DgControl.LookupEdit.type, DgControl.EnumField.type, DgControl.TimePicker.type, DgControl.LanguageTextBox.type, DgControl.InputGroup.type, DgControl.Avatar.type, DgControl.NumberRange.type, DgControl.TimeSpinner.type];
                    /** 表单渲染方式 */
                    this.renderModes = [{
                        value: 'compile',
                        name: '编译'
                    }, {
                        value: 'dynamic',
                        name: '动态渲染'
                    }];
                }
                FormSettingsComponent.prototype.ngOnInit = function() {
                    this.options = this.domServ.options;
                }
                ;
                /**
                 * 刷新静态文本
                 */
                FormSettingsComponent.prototype.refreshInputTextArea = function() {
                    var _this = this;
                    var status = this.options.enableTextArea ? '启用' : '关闭';
                    this.msgServ.question('输入类控件将' + status + '静态文本属性，确定刷新？', function() {
                        _this.domServ.components.forEach(function(cmp) {
                            if (cmp.componentType && cmp.componentType.startsWith('form')) {
                                _this.changeInputTextArea(cmp);
                            }
                        });
                        _this.notifyServ.success('刷新成功');
                    }, function() {
                        return;
                    });
                }
                ;
                /**
                 * 修改卡片组件内输入控件的静态文本属性
                 */
                FormSettingsComponent.prototype.changeInputTextArea = function(domJson) {
                    if (this.inputControlWithTextArea.includes(domJson.type)) {
                        domJson.isTextArea = this.options.enableTextArea;
                        return;
                    }
                    if (domJson.contents) {
                        for (var _i = 0, _a = domJson.contents; _i < _a.length; _i++) {
                            var content = _a[_i];
                            this.changeInputTextArea(content);
                        }
                    }
                    return;
                }
                ;
                FormSettingsComponent.prototype.change = function(e) {
                    var domJson = this.domServ.getDomJson();
                    if (!domJson.options) {
                        // domJson.options = Object.create(Object.prototype);
                        domJson.options = {};
                    }
                    // domJson.options.keepAlive = e;
                }
                ;
                FormSettingsComponent = __decorate([Component({
                    selector: 'app-form-settings',
                    templateUrl: './form-settings.component.html',
                    styleUrls: ['./form-settings.component.css']
                }), __metadata("design:paramtypes", [DomService, NotifyService, MessagerService])], FormSettingsComponent);
                return FormSettingsComponent;
            }());

            var VoDesignerComponent = /** @class */
            (function() {
                function VoDesignerComponent(metadaService) {
                    this.metadaService = metadaService;
                }
                Object.defineProperty(VoDesignerComponent.prototype, "objectTreeData", {
                    get: function() {
                        return this.metadaService.objectTreeData;
                    },
                    enumerable: true,
                    configurable: true
                });
                VoDesignerComponent.prototype.ngOnInit = function() {
                    this.metadaService.getVoMetadata();
                    console.log("getVoMetadata");
                }
                ;
                VoDesignerComponent = __decorate([Component({
                    selector: "app-vo-designer",
                    templateUrl: "./vo-designer.component.html",
                    styleUrls: ["./vo-designer.component.css"],
                    encapsulation: ViewEncapsulation.None,
                }), __metadata("design:paramtypes", [VoMetadataService])], VoDesignerComponent);
                return VoDesignerComponent;
            }());

            var ViewElementConst;
            (function(ViewElementConst) {
                ViewElementConst["ID"] = "ID";
                ViewElementConst["Code"] = "Code";
                ViewElementConst["Name"] = "Name";
                ViewElementConst["LabelID"] = "LabelID";
                ViewElementConst["IsMultiLanguage"] = "IsMultiLanguage";
                ViewElementConst["EnumIndexType"] = "EnumIndexType";
                ViewElementConst["ObjectType"] = "ObjectType";
                ViewElementConst["IsUdt"] = "IsUdt";
                ViewElementConst["DefaultValue"] = "DefaultValue";
                ViewElementConst["Length"] = "Length";
                ViewElementConst["Precision"] = "Precision";
                ViewElementConst["MDataType"] = "MDataType";
            }
            )(ViewElementConst || (ViewElementConst = {}));
            var EnumIndexType;
            (function(EnumIndexType) {
                /**
                 * 整型
                 */
                EnumIndexType[EnumIndexType["Integer"] = 0] = "Integer";
                /**
                 * 字符串
                 */
                EnumIndexType[EnumIndexType["String"] = 1] = "String";
            }
            )(EnumIndexType || (EnumIndexType = {}));
            var EnumData = [{
                label: "文本",
                value: "String"
            }, {
                label: "备注",
                value: "Text"
            }, {
                label: "整数",
                value: "Integer"
            }, {
                label: "浮点数",
                value: "Decimal"
            }, {
                label: "布尔",
                value: "Boolean"
            }, {
                label: "日期",
                value: "Date"
            }, {
                label: "日期时间",
                value: "DateTime"
            }, {
                label: "二进制",
                value: "Binary"
            }, ];
            var createVoColumns = function(template) {
                return [{
                    field: ViewElementConst.ID,
                    title: "ID",
                    editor: {
                        type: EditorTypes.TEXTBOX
                    },
                    visible: false,
                }, {
                    field: ViewElementConst.Code,
                    title: "编号",
                    editor: {
                        type: EditorTypes.TEXTBOX
                    },
                    template: template,
                }, {
                    field: ViewElementConst.Name,
                    title: "名称",
                    editor: {
                        type: EditorTypes.TEXTBOX
                    },
                    template: template,
                }, {
                    field: ViewElementConst.MDataType,
                    title: "数据类型",
                    formatter: {
                        type: "enum",
                        options: {
                            valueField: "value",
                            textField: "label",
                            data: EnumData,
                        },
                    },
                    editor: {
                        type: EditorTypes.COMBOLIST,
                        options: {
                            valueField: "value",
                            textField: "label",
                            idField: "value",
                            data: EnumData,
                        },
                    },
                    template: template,
                }, {
                    field: ViewElementConst.DefaultValue,
                    title: "默认值",
                    editor: {
                        type: EditorTypes.TEXTBOX
                    },
                    template: template,
                }, ];
            };

            var TreeConfig = {
                idField: "id",
                columns: [{
                    field: "name",
                    title: "Name",
                    width: 200
                }],
                /** 叶子节点图标 */
                leafIcon: "f-icon f-icon-file-folder-close text-info mr-2",
                /** 节点展开图标 */
                expandIcon: "f-icon f-icon-file-folder-open text-info mr-2",
                /** 节点折叠图标 */
                collapseIcon: "f-icon f-icon-file-folder-close text-info mr-2",
            };

            var BizColumns = [{
                field: "Code",
                title: "字段编号"
            }, {
                field: "Name",
                title: "字段名称"
            }, ];

            var VoObjectTreeComponent = /** @class */
            (function() {
                function VoObjectTreeComponent(metadaService) {
                    this.metadaService = metadaService;
                    this.treeConfig = TreeConfig;
                }
                Object.defineProperty(VoObjectTreeComponent.prototype, "treeData", {
                    get: function() {
                        return this.metadaService.objectTreeData;
                    },
                    enumerable: true,
                    configurable: true
                });
                VoObjectTreeComponent.prototype.ngOnInit = function() {}
                ;
                VoObjectTreeComponent.prototype.onSelectedChange = function(event) {
                    this.metadaService.setCurrentMainObject(event.node.data.vmobject);
                }
                ;
                VoObjectTreeComponent = __decorate([Component({
                    selector: "app-vo-object-tree",
                    template: "\n    <farris-treetable\n      class=\"vd-tree\"\n      [data]=\"treeData\"\n      [columns]=\"treeConfig.columns\"\n      [idField]=\"treeConfig.idField\"\n      [expandIcon]=\"treeConfig.expandIcon\"\n      [collapseIcon]=\"treeConfig.collapseIcon\"\n      [fit]=\"true\"\n      [showIcon]=\"true\"\n      [showBorder]=\"false\"\n      [showHeader]=\"false\"\n      (nodeSelected)=\"onSelectedChange($event)\"\n    >\n    </farris-treetable>\n  ",
                    styleUrls: ["vo-object-tree.component.css"],
                    encapsulation: ViewEncapsulation.None,
                }), __metadata("design:paramtypes", [VoMetadataService])], VoObjectTreeComponent);
                return VoObjectTreeComponent;
            }());

            var BizElementsGridComponent = /** @class */
            (function() {
                function BizElementsGridComponent() {
                    this.elements = [];
                    this.columns = BizColumns;
                }
                Object.defineProperty(BizElementsGridComponent.prototype, "checkeds", {
                    get: function() {
                        return this.gridRef.checkeds;
                    },
                    enumerable: true,
                    configurable: true
                });
                BizElementsGridComponent.prototype.ngOnInit = function() {}
                ;
                __decorate([Input(), __metadata("design:type", Object)], BizElementsGridComponent.prototype, "elements", void 0);
                __decorate([ViewChild("gridRef"), __metadata("design:type", DatagridComponent)], BizElementsGridComponent.prototype, "gridRef", void 0);
                BizElementsGridComponent = __decorate([Component({
                    selector: "app-biz-elements-grid",
                    template: "\n    <farris-datagrid\n      #gridRef\n      [columns]=\"columns\"\n      [data]=\"elements\"\n      idField=\"ID\"\n      [pagination]=\"false\"\n      [fit]=\"true\"\n      [fitColumns]=\"true\"\n      [showCheckbox]=\"true\"\n      [showAllCheckbox]=\"true\"\n      [multiSelect]=\"true\"\n    ></farris-datagrid>\n  ",
                    styles: ["\n      :host {\n        display: flex;\n      }\n    ", ],
                }), __metadata("design:paramtypes", [])], BizElementsGridComponent);
                return BizElementsGridComponent;
            }());

            var VoContentComponent = /** @class */
            (function() {
                function VoContentComponent(injector, cfr, metadaService, messageService, modalService) {
                    this.injector = injector;
                    this.cfr = cfr;
                    this.metadaService = metadaService;
                    this.messageService = messageService;
                    this.modalService = modalService;
                    this.enumData = EnumData;
                    this.columns = [];
                    this.currentIndex = -1;
                    this.addingElement = false;
                }
                Object.defineProperty(VoContentComponent.prototype, "elements", {
                    get: function() {
                        return this.metadaService.elements;
                    },
                    set: function(value) {
                        this.metadaService.elements = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                VoContentComponent.prototype.ngOnInit = function() {
                    this.columns = createVoColumns(this.opCell);
                }
                ;
                VoContentComponent.prototype.openAddElementDialog = function(elements) {
                    var _this = this;
                    var filterEditorFactory = this.cfr.resolveComponentFactory(BizElementsGridComponent);
                    this.bizElementsGridRef = filterEditorFactory.create(this.injector);
                    this.bizElementsGridRef.instance.elements = elements;
                    this.dlgRef = this.modalService.show(this.bizElementsGridRef, {
                        width: 600,
                        height: 400,
                        title: "添加字段",
                        minHeight: 400,
                        minWidth: 600,
                        buttons: this.btnRef,
                        buttonAlign: "right",
                        closed: function() {
                            _this.addingElement = false;
                        },
                    });
                }
                ;
                VoContentComponent.prototype.closeAddElementDialog = function() {
                    this.dlgRef.close();
                    this.addingElement = false;
                }
                ;
                VoContentComponent.prototype.onAddElement = function() {
                    var _this = this;
                    if (this.addingElement) {
                        return;
                    }
                    this.addingElement = true;
                    this.metadaService.getRefObjctByID().subscribe(function(res) {
                        var elements = res.ContainElements.filter(function(el) {
                            return !_this.elements.find(function(item) {
                                return item.Mapping.TargetElementId === el.ID;
                            });
                        });
                        if (!elements || elements.length === 0) {
                            _this.messageService.info("当前对象的字段已全部添加");
                            _this.addingElement = false;
                            return;
                        }
                        _this.openAddElementDialog(elements);
                    }, function() {
                        _this.addingElement = false;
                        _this.messageService.error("获取当前对象失败！");
                    });
                }
                ;
                VoContentComponent.prototype.onAddElementBtnCancel = function() {
                    console.log("onAddElementBtnCancel");
                    this.closeAddElementDialog();
                }
                ;
                VoContentComponent.prototype.onAddElementBtnConfirm = function() {
                    var _this = this;
                    console.log("onAddElementBtnConfirm");
                    var elementIDs = this.bizElementsGridRef.instance.checkeds.map(function(checked) {
                        return checked.data.ID;
                    });
                    this.metadaService.convertBizElementIdsToViewElements(elementIDs).subscribe(function(elements) {
                        console.log(elements);
                        _this.elements = _this.elements.concat(elements);
                    }, function() {
                        _this.messageService.error("添加字段异常！");
                    });
                    this.closeAddElementDialog();
                }
                ;
                VoContentComponent.prototype.onDeleteElement = function() {
                    console.log(this.currentIndex);
                    // this.elements = this.elements.slice(this.currentIndex, this.currentIndex+1)
                    if (this.currentIndex < 0) {
                        this.messageService.info("请选择要删除的行！");
                        return;
                    }
                    this.elements.splice(this.currentIndex, 1);
                    this.elements = this.elements.concat();
                    this.currentIndex = -1;
                }
                ;
                VoContentComponent.prototype.onRefresh = function() {
                    this.metadaService.synchronizeVO();
                }
                ;
                VoContentComponent.prototype.onGridSelectChanged = function(row) {
                    this.currentIndex = row.index;
                }
                ;
                VoContentComponent.prototype.endEdit = function(res) {
                    this.metadaService.updateElment(res.rowIndex, {
                        field: res.column.field,
                        value: res.value,
                    });
                }
                ;
                VoContentComponent.prototype.format = function(row) {
                    if (row.field === "MDataType") {
                        return row.tools.utils.getEnumTitle(row.column, row.rowData);
                    }
                    return row.rowData[row.field];
                }
                ;
                __decorate([ViewChild("defaultButtonRef"), __metadata("design:type", TemplateRef)], VoContentComponent.prototype, "btnRef", void 0);
                __decorate([ViewChild("opCell"), __metadata("design:type", TemplateRef)], VoContentComponent.prototype, "opCell", void 0);
                VoContentComponent = __decorate([Component({
                    selector: "app-vo-content",
                    templateUrl: "vo-content.component.html",
                    styleUrls: ["vo-content.component.css"],
                    encapsulation: ViewEncapsulation.None,
                }), __metadata("design:paramtypes", [Injector, ComponentFactoryResolver, VoMetadataService, MessagerService, BsModalService])], VoContentComponent);
                return VoContentComponent;
            }());

            var ɵ0 = gsp.cache;
            var FormEditorModule = /** @class */
            (function() {
                function FormEditorModule() {}
                FormEditorModule = __decorate([NgModule({
                    declarations: [FormEditorComponent, FormDesignerComponent, ClassEditorComponent, FormSettingsComponent, VoDesignerComponent, VoObjectTreeComponent, VoContentComponent, BizElementsGridComponent],
                    imports: [BrowserModule, CommonModule, FormsModule, PropertyPanelModule, AngularDraggableModule, SplitterModule, SwitchModule, LoadingModule.forRoot({
                        message: '加载中，请稍候...'
                    }), TreeTableModule, FAreaResponseModule, FarrisDesignerDevkitModule, FarrisMobileDesignerUIModule, GSPMetadataServiceModule.forRoot(environment.SERVER_IP), MessagerModule, FarrisTabsModule, DatagridModule],
                    providers: [LoadingService, {
                        provide: CacheService,
                        useValue: ɵ0
                    }],
                    bootstrap: [FormEditorComponent],
                    exports: [FormEditorComponent],
                    entryComponents: [BizElementsGridComponent],
                })], FormEditorModule);
                return FormEditorModule;
            }());

            var globalGsp = window.top.gsp;
            if (globalGsp && globalGsp.context) {
                window.gsp = new GSP(globalGsp);
            }
            var config = {
                fileSuffix2PluginsUrlMap: {
                    '.ts': 'plugins/code-editor-panel'
                }
            };
            // 测试环境配置sessionId，iGix环境中删掉此行
            gsp.cache.set('sessionId', 'default');
            var ɵ0$1 = gsp.cache;
            // 运行：http://localhost:4200/?id=/wangxhApp/wangxhSu/wangxhBo/bo-wangxhbofronttest/metadata/components/card11.frm
            var AppModule = /** @class */
            (function() {
                function AppModule() {}
                AppModule = __decorate([NgModule({
                    declarations: [AppComponent],
                    imports: [BrowserModule, CommonModule, FormsModule, FormEditorModule, IdeCodeViewModule.forRoot(config)],
                    providers: [{
                        provide: CacheService,
                        useValue: ɵ0$1
                    }],
                    bootstrap: [AppComponent],
                })], AppModule);
                return AppModule;
            }());

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_BizElementsGridComponent = ["[_nghost-%COMP%] {\n        display: flex;\n      }"];
            var RenderType_BizElementsGridComponent = ɵcrt({
                encapsulation: 0,
                styles: styles_BizElementsGridComponent,
                data: {}
            });
            function View_BizElementsGridComponent_0(_l) {
                return ɵvid(0, [ɵqud(402653184, 1, {
                    gridRef: 0
                }), (_l()(),
                ɵeld(1, 0, null, null, 5, "farris-datagrid", [["idField", "ID"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    if (("click" === en)) {
                        var pd_0 = (ɵnov(_v, 5).onClick($event) !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(5, 6275072, [[1, 4], ["gridRef", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], {
                    fit: [0, "fit"],
                    fitColumns: [1, "fitColumns"],
                    pagination: [2, "pagination"],
                    multiSelect: [3, "multiSelect"],
                    showCheckbox: [4, "showCheckbox"],
                    showAllCheckbox: [5, "showAllCheckbox"],
                    idField: [6, "idField"],
                    data: [7, "data"],
                    columns: [8, "columns"]
                }, null), ɵqud(603979776, 2, {
                    dgColumns: 1
                })], function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_3 = true;
                    var currVal_4 = true;
                    var currVal_5 = false;
                    var currVal_6 = true;
                    var currVal_7 = true;
                    var currVal_8 = true;
                    var currVal_9 = "ID";
                    var currVal_10 = _co.elements;
                    var currVal_11 = _co.columns;
                    _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);
                }, function(_ck, _v) {
                    var currVal_0 = ɵnov(_v, 5).pos;
                    var currVal_1 = ɵnov(_v, 5).hostCls;
                    var currVal_2 = ɵnov(_v, 5).autoHeightCls;
                    _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
                });
            }
            function View_BizElementsGridComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "app-biz-elements-grid", [], null, null, null, View_BizElementsGridComponent_0, RenderType_BizElementsGridComponent)), ɵdid(1, 114688, null, 0, BizElementsGridComponent, [], null, null)], function(_ck, _v) {
                    _ck(_v, 1, 0);
                }, null);
            }
            var BizElementsGridComponentNgFactory = ɵccf("app-biz-elements-grid", BizElementsGridComponent, View_BizElementsGridComponent_Host_0, {
                elements: "elements"
            }, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = ["[_nghost-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    user-select: none;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .mainContent[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    background: #fff;\r\n    display: flex;\r\n    min-height: 40px;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\r\n    color: #9ca5ad;\r\n}\r\n\r\n\r\n\r\n\r\n.formEditor[_ngcontent-%COMP%]   .viewTypePanel[_ngcontent-%COMP%] {\r\n    padding: 2px;\r\n    background: #F0F3F9;\r\n    border-radius: 5px;\r\n    margin-right: 15px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n    margin-left: 17px;\r\n    height: 28px;\r\n    min-width: 145px;\r\n    cursor: pointer;\r\n    color: #8DA3CE;\r\n    align-self: center;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .viewTypePanel[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    background: #F4F5F9;\r\n    display: flex;\r\n    text-align: center;\r\n    align-items: center;\r\n    padding: 0 8px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .viewTypePanel[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%] {\r\n    color: #5B89FE;\r\n    background: #fff;\r\n    box-shadow: 0 0 4px 0 rgb(161 179 255 / 37%);\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .viewTypePanel[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    display: flex;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .viewTypePanel[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 15px;\r\n    margin-right: 4px;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .showTypePanel[_ngcontent-%COMP%] {\r\n    padding: 0px 20px;\r\n    height: 30px;\r\n    align-self: center;\r\n    font-size: 14px;\r\n    color: #000;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .showTypePanel[_ngcontent-%COMP%]   .showTypeItem[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .showTypePanel[_ngcontent-%COMP%]   .showTypeItem[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    padding: 4px 4px 9px 4px;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .showTypePanel[_ngcontent-%COMP%]   .showTypeItem[_ngcontent-%COMP%] > div.active[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #2A87FF;\r\n    color: #5B89FE;\r\n}\r\n\r\n\r\n.formEditor[_ngcontent-%COMP%]   .toolbarPanel[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    color: #2D2F33;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-right: 20px;\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .toolbarPanel[_ngcontent-%COMP%]   .ide-toolbar-btn[_ngcontent-%COMP%] {\r\n    background: #fff !important;\r\n    display: inline-flex;\r\n\r\n}\r\n\r\n.formEditor[_ngcontent-%COMP%]   .toolbarPanel[_ngcontent-%COMP%]   .btn.ide-toolbar-btn[_ngcontent-%COMP%]   .ide-icon[_ngcontent-%COMP%], .ide-toolbar-btn[_ngcontent-%COMP%]   .ide-icon[_ngcontent-%COMP%] {\r\n    \r\n    margin-right: 5px;\r\n}"];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles$1 = ["[_nghost-%COMP%] {\r\n    padding: 20px 15px;\r\n    display: block;\r\n    background: rgb(248, 249, 251);\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.optionPanel[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px 0 #eceff4;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    padding: 8px 14px;\r\n}\r\n\r\n.optionPanel[_ngcontent-%COMP%]   .f-section-header[_ngcontent-%COMP%] {\r\n    margin: 0 0 4px;\r\n}\r\n\r\n.optionPanel[_ngcontent-%COMP%]   .col-form-label[_ngcontent-%COMP%] {\r\n    justify-content: start!important;\r\n    width: auto;\r\n}\r\n\r\n.optionPanel[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    padding: .25rem .5rem;\r\n}"];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_FormSettingsComponent = [styles$1];
            var RenderType_FormSettingsComponent = ɵcrt({
                encapsulation: 0,
                styles: styles_FormSettingsComponent,
                data: {}
            });
            function View_FormSettingsComponent_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "h3", [["class", "mb-3 f-text-emphasize"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u8868\u5355\u8BBE\u7F6E"])), (_l()(),
                ɵeld(2, 0, null, null, 16, "div", [["class", "optionPanel farris-form-controls-inline mb-3"]], null, null, null, null, null)), (_l()(),
                ɵeld(3, 0, null, null, 3, "div", [["class", "f-section-header"]], null, null, null, null, null)), (_l()(),
                ɵeld(4, 0, null, null, 2, "div", [["class", "f-title"]], null, null, null, null, null)), (_l()(),
                ɵeld(5, 0, null, null, 1, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u7F13\u5B58\u914D\u7F6E"])), (_l()(),
                ɵeld(7, 0, null, null, 11, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(),
                ɵeld(8, 0, null, null, 10, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), (_l()(),
                ɵeld(9, 0, null, null, 2, "label", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(),
                ɵeld(10, 0, null, null, 1, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u662F\u5426\u542F\u7528\u7F13\u5B58"])), (_l()(),
                ɵeld(12, 0, null, null, 6, "div", [["class", "mr-4"]], null, null, null, null, null)), (_l()(),
                ɵeld(13, 0, null, null, 5, "farris-switch", [["size", "small"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "valueChange"], [null, "click"], [null, "keydown.Space"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (ɵnov(_v, 14).onToggle($event) !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("keydown.Space" === en)) {
                        var pd_1 = (ɵnov(_v, 14).onSpaceHandle($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    if (("ngModelChange" === en)) {
                        var pd_2 = ((_co.options.keepAlive = $event) !== false);
                        ad = (pd_2 && ad);
                    }
                    if (("valueChange" === en)) {
                        var pd_3 = (_co.change($event) !== false);
                        ad = (pd_3 && ad);
                    }
                    return ad;
                }, View_SwitchComponent_0, RenderType_SwitchComponent)), ɵdid(14, 180224, null, 0, SwitchComponent, [[2, SWITCH_OPTIONS], ChangeDetectorRef, Injector], {
                    size: [0, "size"]
                }, {
                    valueChange: "valueChange"
                }), ɵprd(1024, null, NG_VALUE_ACCESSOR, function(p0_0) {
                    return [p0_0];
                }, [SwitchComponent]), ɵdid(16, 671744, null, 0, NgModel, [[8, null], [8, null], [8, null], [6, NG_VALUE_ACCESSOR]], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), ɵprd(2048, null, NgControl, null, [NgModel]), ɵdid(18, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_7 = "small";
                    _ck(_v, 14, 0, currVal_7);
                    var currVal_8 = _co.options.keepAlive;
                    _ck(_v, 16, 0, currVal_8);
                }, function(_ck, _v) {
                    var currVal_0 = ɵnov(_v, 18).ngClassUntouched;
                    var currVal_1 = ɵnov(_v, 18).ngClassTouched;
                    var currVal_2 = ɵnov(_v, 18).ngClassPristine;
                    var currVal_3 = ɵnov(_v, 18).ngClassDirty;
                    var currVal_4 = ɵnov(_v, 18).ngClassValid;
                    var currVal_5 = ɵnov(_v, 18).ngClassInvalid;
                    var currVal_6 = ɵnov(_v, 18).ngClassPending;
                    _ck(_v, 13, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
                });
            }
            function View_FormSettingsComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "app-form-settings", [], null, null, null, View_FormSettingsComponent_0, RenderType_FormSettingsComponent)), ɵdid(1, 114688, null, 0, FormSettingsComponent, [DomService, NotifyService, MessagerService], null, null)], function(_ck, _v) {
                    _ck(_v, 1, 0);
                }, null);
            }
            var FormSettingsComponentNgFactory = ɵccf("app-form-settings", FormSettingsComponent, View_FormSettingsComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles$2 = [".vd-page {\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n.vd-page .vd-page-content {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.vd-page .vd-page-content .vd-page-content-left {\r\n  width: 230px;\r\n  background: #f9fafc;\r\n  padding: 10px;\r\n  box-shadow: inset -1px 0px 0px 0px rgba(240, 243, 248, 1);\r\n}\r\n"];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles$3 = [".vd-tree .farris-treetable .table {\r\n  background: #f9fafc;\r\n}\r\n\r\n.vd-tree .farris-treetable .table tr .treetable-toggler {\r\n  border: none;\r\n  background-color: inherit;\r\n}\r\n\r\n.vd-tree .farris-treetable .table tr .treetable-toggler:hover::before {\r\n  color: #2d2f33;\r\n}\r\n\r\n.vd-tree .farris-treetable .table tr .treetable-toggler::before {\r\n  font-family: FarrisExtend;\r\n  content: \"\\e005\";\r\n}\r\n\r\n.vd-tree .farris-treetable .table tr .treetable-toggler.extanded::before {\r\n  content: \"\\e006\";\r\n}\r\n\r\n.vd-tree .farris-treetable .table tr:hover,\r\n.vd-tree .farris-treetable .table tr.farris-table-selectedrow {\r\n  background-color: #ebf2fa;\r\n}\r\n\r\n.vd-tree .farris-treetable .treetable-cell {\r\n  height: 30px;\r\n  border-radius: 5px;\r\n}\r\n"];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_VoObjectTreeComponent = [styles$3];
            var RenderType_VoObjectTreeComponent = ɵcrt({
                encapsulation: 2,
                styles: styles_VoObjectTreeComponent,
                data: {}
            });
            function View_VoObjectTreeComponent_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 3, "farris-treetable", [["class", "vd-tree"]], null, [[null, "nodeSelected"], ["window", "resize"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("window:resize" === en)) {
                        var pd_0 = (ɵnov(_v, 1).onResized() !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("nodeSelected" === en)) {
                        var pd_1 = (_co.onSelectedChange($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    return ad;
                }, View_TreeTableComponent_0, RenderType_TreeTableComponent)), ɵdid(1, 14401536, null, 2, TreeTableComponent, [TreetableService, ElementRef, ResizeService, Renderer2, CommonUtils, ColumnFormatService, TTHotkeys, ChangeDetectorRef, NgZone, Injector], {
                    columns: [0, "columns"],
                    idField: [1, "idField"],
                    showBorder: [2, "showBorder"],
                    showHeader: [3, "showHeader"],
                    fit: [4, "fit"],
                    showIcon: [5, "showIcon"],
                    expandIcon: [6, "expandIcon"],
                    collapseIcon: [7, "collapseIcon"],
                    data: [8, "data"]
                }, {
                    nodeSelected: "nodeSelected"
                }), ɵqud(603979776, 1, {
                    templates: 1
                }), ɵqud(603979776, 2, {
                    columnsRef: 1
                })], function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_0 = _co.treeConfig.columns;
                    var currVal_1 = _co.treeConfig.idField;
                    var currVal_2 = false;
                    var currVal_3 = false;
                    var currVal_4 = true;
                    var currVal_5 = true;
                    var currVal_6 = _co.treeConfig.expandIcon;
                    var currVal_7 = _co.treeConfig.collapseIcon;
                    var currVal_8 = _co.treeData;
                    _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
                }, null);
            }
            function View_VoObjectTreeComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "app-vo-object-tree", [], null, null, null, View_VoObjectTreeComponent_0, RenderType_VoObjectTreeComponent)), ɵdid(1, 114688, null, 0, VoObjectTreeComponent, [VoMetadataService], null, null)], function(_ck, _v) {
                    _ck(_v, 1, 0);
                }, null);
            }
            var VoObjectTreeComponentNgFactory = ɵccf("app-vo-object-tree", VoObjectTreeComponent, View_VoObjectTreeComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles$4 = [".vd-page-content-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  background-color: #fff;\r\n  padding: 10px 15px;\r\n  box-shadow: inset 0px 1px 0px 0px #f0f3f8;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar {\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 18px;\r\n  color: #34495e;\r\n  padding-top: 4px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item {\r\n  display: flex;\r\n  cursor: pointer;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item .toolbar-item-icon {\r\n  position: relative;\r\n  height: 15px;\r\n  width: 15px;\r\n  border: 1px solid #5b89fe;\r\n  border-radius: 3px;\r\n  margin-right: 6px;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item .toolbar-item-icon::after {\r\n  content: \"T\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 2px;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  color: #4e56c4;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item .toolbar-item-icon::before {\r\n  font-family: FarrisExtend;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  height: 10px;\r\n  width: 10px;\r\n  line-height: 8px;\r\n  color: #00cdba;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  bottom: -2px;\r\n  right: -4px;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item .toolbar-item-icon-add::before {\r\n  content: \"\\e11e\";\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item .toolbar-item-icon-delete::before {\r\n  content: \"\\e11b\";\r\n  color: #fa6c00;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item .toolbar-item-icon-refresh::before {\r\n  content: \"\\e106\";\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item:hover {\r\n  color: #5B89FE;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-toolbar .toolbar-item-spilter {\r\n  width: 1px;\r\n  height: 12px;\r\n  margin: 0 10px;\r\n  background-image: linear-gradient(180deg, rgba(40, 60, 93, 0) 0%, rgba(40, 60, 93, 0.1) 23%, rgba(40, 60, 93, 0.1) 52%, rgba(40, 60, 93, 0.1) 84%, rgba(40, 60, 93, 0) 100%);\r\n  border-radius: 0.5px;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-grid {\r\n  display: flex;\r\n  flex: 1;\r\n  border: 1px solid #e9ecf3;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.vd-page-content-main .vd-page-content-grid .f-datagrid-header-fixed-left,\r\n.vd-page-content-main .vd-page-content-grid .f-datagrid-body-fixed-left {\r\n  box-shadow: none;\r\n}\r\n\r\n.vd-page-content-main .cell-wrapper {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 13px;\r\n  color: #424347;\r\n}\r\n\r\n.vd-page-content-main .cell-wrapper .f-icon {\r\n  color: #878D99;\r\n}\r\n"];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_VoContentComponent = [styles$4];
            var RenderType_VoContentComponent = ɵcrt({
                encapsulation: 2,
                styles: styles_VoContentComponent,
                data: {}
            });
            function View_VoContentComponent_1(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "button", [["class", "btn btn-outline-secondary"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onAddElementBtnCancel() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵted(-1, null, ["\u53D6\u6D88"])), (_l()(),
                ɵted(-1, null, ["\u00A0 "])), (_l()(),
                ɵeld(3, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onAddElementBtnConfirm() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵted(-1, null, ["\u786E\u8BA4"]))], null, null);
            }
            function View_VoContentComponent_3(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 0, "span", [["class", "f-icon f-icon-drop-down_line"]], null, null, null, null, null))], null, null);
            }
            function View_VoContentComponent_4(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 0, "span", [["class", "f-icon f-icon-edit-cardview"]], null, null, null, null, null))], null, null);
            }
            function View_VoContentComponent_2(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 6, "div", [["class", "cell-wrapper"]], null, null, null, null, null)), (_l()(),
                ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(),
                ɵted(2, null, ["", ""])), (_l()(),
                ɵand(16777216, null, null, 1, null, View_VoContentComponent_3)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (_l()(),
                ɵand(16777216, null, null, 1, null, View_VoContentComponent_4)), ɵdid(6, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(_ck, _v) {
                    var currVal_1 = (_v.context.$implicit.field === "MDataType");
                    _ck(_v, 4, 0, currVal_1);
                    var currVal_2 = (_v.context.$implicit.field !== "MDataType");
                    _ck(_v, 6, 0, currVal_2);
                }, function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_0 = _co.format(_v.context.$implicit);
                    _ck(_v, 2, 0, currVal_0);
                });
            }
            function View_VoContentComponent_0(_l) {
                return ɵvid(0, [ɵqud(402653184, 1, {
                    btnRef: 0
                }), ɵqud(402653184, 2, {
                    opCell: 0
                }), (_l()(),
                ɵeld(2, 0, null, null, 22, "div", [["class", "f-component-splitter-pane vd-page-content-main"]], null, null, null, null, null)), (_l()(),
                ɵeld(3, 0, null, null, 14, "div", [["class", "vd-page-content-toolbar"]], null, null, null, null, null)), (_l()(),
                ɵeld(4, 0, null, null, 3, "div", [["class", "toolbar-item"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onAddElement() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(5, 0, null, null, 0, "div", [["class", "toolbar-item-icon toolbar-item-icon-add"]], null, null, null, null, null)), (_l()(),
                ɵeld(6, 0, null, null, 1, "span", [["class", "toolbar-item-text"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u6DFB\u52A0\u5B57\u6BB5"])), (_l()(),
                ɵeld(8, 0, null, null, 0, "div", [["class", "toolbar-item-spilter"]], null, null, null, null, null)), (_l()(),
                ɵeld(9, 0, null, null, 3, "div", [["class", "toolbar-item"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onDeleteElement() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(10, 0, null, null, 0, "div", [["class", "toolbar-item-icon toolbar-item-icon-delete"]], null, null, null, null, null)), (_l()(),
                ɵeld(11, 0, null, null, 1, "span", [["class", "toolbar-item-text"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u5220\u9664\u5B57\u6BB5"])), (_l()(),
                ɵeld(13, 0, null, null, 0, "div", [["class", "toolbar-item-spilter"]], null, null, null, null, null)), (_l()(),
                ɵeld(14, 0, null, null, 3, "div", [["class", "toolbar-item"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onRefresh() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(15, 0, null, null, 0, "div", [["class", "toolbar-item-icon toolbar-item-icon-refresh"]], null, null, null, null, null)), (_l()(),
                ɵeld(16, 0, null, null, 1, "span", [["class", "toolbar-item-text"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u5237\u65B0"])), (_l()(),
                ɵeld(18, 0, null, null, 6, "div", [["class", "vd-page-content-grid"]], null, null, null, null, null)), (_l()(),
                ɵeld(19, 0, null, null, 5, "farris-datagrid", [["idField", "ID"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "endEdit"], [null, "selectChanged"], [null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (ɵnov(_v, 23).onClick($event) !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("endEdit" === en)) {
                        var pd_1 = (_co.endEdit($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    if (("selectChanged" === en)) {
                        var pd_2 = (_co.onGridSelectChanged($event) !== false);
                        ad = (pd_2 && ad);
                    }
                    return ad;
                }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(23, 6275072, null, 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], {
                    fit: [0, "fit"],
                    fitColumns: [1, "fitColumns"],
                    showLineNumber: [2, "showLineNumber"],
                    pagination: [3, "pagination"],
                    multiSelect: [4, "multiSelect"],
                    showCheckbox: [5, "showCheckbox"],
                    showAllCheckbox: [6, "showAllCheckbox"],
                    idField: [7, "idField"],
                    data: [8, "data"],
                    columns: [9, "columns"],
                    editMode: [10, "editMode"],
                    editable: [11, "editable"]
                }, {
                    endEdit: "endEdit",
                    selectChanged: "selectChanged"
                }), ɵqud(603979776, 3, {
                    dgColumns: 1
                }), (_l()(),
                ɵand(0, [[1, 2], ["defaultButtonRef", 2]], null, 0, null, View_VoContentComponent_1)), (_l()(),
                ɵand(0, [[2, 2], ["opCell", 2]], null, 0, null, View_VoContentComponent_2))], function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_3 = true;
                    var currVal_4 = true;
                    var currVal_5 = true;
                    var currVal_6 = false;
                    var currVal_7 = true;
                    var currVal_8 = true;
                    var currVal_9 = true;
                    var currVal_10 = "ID";
                    var currVal_11 = _co.elements;
                    var currVal_12 = _co.columns;
                    var currVal_13 = "cell";
                    var currVal_14 = true;
                    _ck(_v, 23, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]);
                }, function(_ck, _v) {
                    var currVal_0 = ɵnov(_v, 23).pos;
                    var currVal_1 = ɵnov(_v, 23).hostCls;
                    var currVal_2 = ɵnov(_v, 23).autoHeightCls;
                    _ck(_v, 19, 0, currVal_0, currVal_1, currVal_2);
                });
            }
            function View_VoContentComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "app-vo-content", [], null, null, null, View_VoContentComponent_0, RenderType_VoContentComponent)), ɵdid(1, 114688, null, 0, VoContentComponent, [Injector, ComponentFactoryResolver, VoMetadataService, MessagerService, BsModalService], null, null)], function(_ck, _v) {
                    _ck(_v, 1, 0);
                }, null);
            }
            var VoContentComponentNgFactory = ɵccf("app-vo-content", VoContentComponent, View_VoContentComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_VoDesignerComponent = [styles$2];
            var RenderType_VoDesignerComponent = ɵcrt({
                encapsulation: 2,
                styles: styles_VoDesignerComponent,
                data: {}
            });
            function View_VoDesignerComponent_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 10, "div", [["class", "vd-page"]], null, null, null, null, null)), (_l()(),
                ɵeld(1, 0, null, null, 9, "farris-splitter", [["class", "f-component-splitter vd-page-content"]], [[2, "f-component-splitter", null]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵdid(2, 1163264, null, 1, SplitterComponent, [], null, null), ɵqud(603979776, 1, {
                    splitterPane: 1
                }), (_l()(),
                ɵeld(4, 0, null, 0, 4, "farris-splitter-pane", [["class", "f-component-splitter-pane vd-page-content-left"], ["ngResizable", ""]], [[2, "f-component-splitter-pane", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(5, 4931584, null, 0, AngularResizableDirective, [ElementRef, Renderer2], {
                    ngResizable: [0, "ngResizable"],
                    rzHandles: [1, "rzHandles"],
                    rzMinWidth: [2, "rzMinWidth"]
                }, null), ɵdid(6, 114688, [[1, 4]], 0, SplitterPaneComponent, [], null, null), (_l()(),
                ɵeld(7, 0, null, 0, 1, "app-vo-object-tree", [], null, null, null, View_VoObjectTreeComponent_0, RenderType_VoObjectTreeComponent)), ɵdid(8, 114688, null, 0, VoObjectTreeComponent, [VoMetadataService], null, null), (_l()(),
                ɵeld(9, 0, null, 0, 1, "app-vo-content", [["style", "display: flex;flex: 1;"]], null, null, null, View_VoContentComponent_0, RenderType_VoContentComponent)), ɵdid(10, 114688, null, 0, VoContentComponent, [Injector, ComponentFactoryResolver, VoMetadataService, MessagerService, BsModalService], null, null)], function(_ck, _v) {
                    _ck(_v, 2, 0);
                    var currVal_2 = "";
                    var currVal_3 = "e";
                    var currVal_4 = 200;
                    _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4);
                    _ck(_v, 6, 0);
                    _ck(_v, 8, 0);
                    _ck(_v, 10, 0);
                }, function(_ck, _v) {
                    var currVal_0 = ɵnov(_v, 2).cls;
                    _ck(_v, 1, 0, currVal_0);
                    var currVal_1 = ɵnov(_v, 6).cls;
                    _ck(_v, 4, 0, currVal_1);
                });
            }
            function View_VoDesignerComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "app-vo-designer", [], null, null, null, View_VoDesignerComponent_0, RenderType_VoDesignerComponent)), ɵdid(1, 114688, null, 0, VoDesignerComponent, [VoMetadataService], null, null)], function(_ck, _v) {
                    _ck(_v, 1, 0);
                }, null);
            }
            var VoDesignerComponentNgFactory = ɵccf("app-vo-designer", VoDesignerComponent, View_VoDesignerComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles$5 = [".fd-page[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    bottom: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    background: #F2F6FC;\r\n}\r\n\r\n.fd-page-navigate[_ngcontent-%COMP%]   .fd-page-main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden\r\n}\r\n\r\n.fd-page-navigate[_ngcontent-%COMP%]   .fd-page-content[_ngcontent-%COMP%] {\r\n    flex-shrink: 1;\r\n    flex-grow: 1;\r\n    flex-basis: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    overflow: hidden\r\n}\r\n\r\n.fd-page-navigate[_ngcontent-%COMP%]   .fd-page-content[_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], .fd-page-navigate[_ngcontent-%COMP%]   .fd-page-content[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    padding-right: 0\r\n}\r\n\r\n.fd-page-navigate[_ngcontent-%COMP%]   .fd-page-content-nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 0 0 8px 0 rgba(0, 28, 64, .08);\r\n    padding: .5rem 0;\r\n    position: relative;\r\n    z-index: 100\r\n}\r\n\r\n.fd-page-navigate[_ngcontent-%COMP%]   .fd-page-content-main[_ngcontent-%COMP%] {\r\n    flex-shrink: 1;\r\n    flex-grow: 1;\r\n    flex-basis: 0;\r\n    overflow: auto\r\n}\r\n\r\n.fd-page-navigate[_ngcontent-%COMP%]   .fd-page-content-main[_ngcontent-%COMP%] > .f-section[_ngcontent-%COMP%]:last-child::after {\r\n    display: none\r\n}\r\n\r\n.fd-page-navigate[_ngcontent-%COMP%]   .fd-page-content-nav.f-component-splitter-pane[_ngcontent-%COMP%] {\r\n    padding: 0\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n    height: 100%;\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%] {\r\n    \r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    overflow: hidden;\r\n    line-height: 30px;\r\n    min-height: 35px;\r\n    text-align: right;\r\n    white-space: nowrap;\r\n    justify-content: space-between;\r\n    background-color: #fff;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]  .farris-treetable .farris-treetable-tbody tr {\r\n    color: rgba(0, 0, 0) !important;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 5px;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n    height: 32px;\r\n    background: #EFF5FF;\r\n    border-radius: 6px;\r\n    padding: 2px;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .left-tab-item[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #6080AD;\r\n    line-height: 23px;\r\n    font-weight: 400;\r\n    padding: 2px 16px 3px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    width: 33%;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .left-tab-item.checked[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.90);\r\n    box-shadow: 0px 4px 10px 0px rgba(2, 75, 193, 0.1);\r\n    border-radius: 6px;\r\n    color: #2A87FF;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .left-tab-item[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .leftBar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .editorDiv[_ngcontent-%COMP%] {\r\n    background-color: #dbe6f7;\r\n    overflow-x: auto;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .editorDiv[_ngcontent-%COMP%]   .editorPanel[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100%;\r\n    font-size: 14px;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .editorDiv[_ngcontent-%COMP%]   .editorPanel.Mobile[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    margin: auto;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .designerCodePanel[_ngcontent-%COMP%]   .customMonacoEditor[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .pane-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .propertyResizeLeft[_ngcontent-%COMP%] {\r\n    left: 0 !important;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .fd-page-content-main[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    height: 43px;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .fd-page-content-main[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .bottom-tab-item[_ngcontent-%COMP%] {\r\n    height: 26px;\r\n    color: #8DA3CE;\r\n    border-radius: 5px;\r\n    padding: 4px 10px;\r\n    line-height: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .fd-page-content-main[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .bottom-tab-item.checked[_ngcontent-%COMP%] {\r\n    background: #EEF4FF;\r\n    color: #3486FF;\r\n}\r\n\r\n@media screen and (min-width: 1100px) {\r\n    .formDesigner[_ngcontent-%COMP%]   .editorDiv[_ngcontent-%COMP%]   .editorPanel[_ngcontent-%COMP%] {\r\n        width: 414px;\r\n        min-height: 736px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1100px) {\r\n    .formDesigner[_ngcontent-%COMP%]   .editorDiv[_ngcontent-%COMP%]   .editorPanel[_ngcontent-%COMP%] {\r\n        width: 375px;\r\n        min-height: 667px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .formDesigner[_ngcontent-%COMP%]   .editorDiv[_ngcontent-%COMP%]   .editorPanel[_ngcontent-%COMP%] {\r\n        width: 320px;\r\n        min-height: 568px;\r\n    }\r\n}\r\n\r\n.formDesigner[_ngcontent-%COMP%]   .editorDiv[_ngcontent-%COMP%]   .editorPanel[_ngcontent-%COMP%] {\r\n    margin: 30px auto;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #F9FAFB;\r\n}"];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles$6 = ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  position: relative;\r\n  display: block;\r\n}\r\n.customMonacoEditor[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n}"];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_ClassEditorComponent = [styles$6];
            var RenderType_ClassEditorComponent = ɵcrt({
                encapsulation: 0,
                styles: styles_ClassEditorComponent,
                data: {}
            });
            function View_ClassEditorComponent_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 20, "div", [["cdkDropListGroup", ""], ["class", "formDesigner f-page f-page-navigate"]], null, null, null, null, null)), (_l()(),
                ɵeld(1, 0, null, null, 19, "farris-splitter", [["class", "d-flex f-page-content f-component-splitter"]], [[2, "f-component-splitter", null]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵdid(2, 1163264, null, 1, SplitterComponent, [], null, null), ɵqud(603979776, 1, {
                    splitterPane: 1
                }), (_l()(),
                ɵeld(4, 0, null, 0, 7, "farris-splitter-pane", [["class", "px-0 f-component-splitter-pane border-top f-page-content-nav bg-white"], ["ngResizable", ""], ["style", "width:350px;"]], [[2, "f-component-splitter-pane", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(5, 4931584, null, 0, AngularResizableDirective, [ElementRef, Renderer2], {
                    ngResizable: [0, "ngResizable"],
                    rzHandles: [1, "rzHandles"],
                    rzMinWidth: [2, "rzMinWidth"]
                }, null), ɵdid(6, 114688, [[1, 4]], 0, SplitterPaneComponent, [], null, null), (_l()(),
                ɵeld(7, 0, null, 0, 4, "div", [["class", "h-100 f-utils-overflow-auto"]], null, null, null, null, null)), (_l()(),
                ɵeld(8, 0, null, null, 3, "farris-treetable", [], null, [[null, "nodeSelected"], [null, "nodeUnSelect"], ["window", "resize"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("window:resize" === en)) {
                        var pd_0 = (ɵnov(_v, 9).onResized() !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("nodeSelected" === en)) {
                        var pd_1 = (_co.nodeSelected($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    if (("nodeUnSelect" === en)) {
                        var pd_2 = (_co.nodeUnSelected($event) !== false);
                        ad = (pd_2 && ad);
                    }
                    return ad;
                }, View_TreeTableComponent_0, RenderType_TreeTableComponent)), ɵdid(9, 14401536, [["tt", 4]], 2, TreeTableComponent, [TreetableService, ElementRef, ResizeService, Renderer2, CommonUtils, ColumnFormatService, TTHotkeys, ChangeDetectorRef, NgZone, Injector], {
                    showFilterBar: [0, "showFilterBar"],
                    columns: [1, "columns"],
                    singleSelect: [2, "singleSelect"],
                    idField: [3, "idField"],
                    showBorder: [4, "showBorder"],
                    showHeader: [5, "showHeader"],
                    striped: [6, "striped"],
                    fixedHeader: [7, "fixedHeader"],
                    fit: [8, "fit"],
                    virtualized: [9, "virtualized"],
                    showIcon: [10, "showIcon"],
                    data: [11, "data"]
                }, {
                    nodeSelected: "nodeSelected",
                    nodeUnSelect: "nodeUnSelect"
                }), ɵqud(603979776, 2, {
                    templates: 1
                }), ɵqud(603979776, 3, {
                    columnsRef: 1
                }), (_l()(),
                ɵeld(12, 0, null, 0, 8, "div", [["class", "f-page-content-main f-component-splitter-pane h-100 f-utils-overflow-hidden position-relative"]], null, null, null, null, null)), (_l()(),
                ɵeld(13, 0, null, null, 7, "angular-monaco-editor", [["class", "customMonacoEditor"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onInit"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("ngModelChange" === en)) {
                        var pd_0 = ((_co.classCode = $event) !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("onInit" === en)) {
                        var pd_1 = (_co.onMonacoInit($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    return ad;
                }, View_ɵk_0, RenderType_ɵk)), ɵprd(512, null, ɵp, ɵp, []), ɵprd(512, null, ɵm, ɵm, []), ɵdid(16, 4374528, null, 0, ɵk, [ɵp, NgZone, ɵm, ɵn], {
                    options: [0, "options"]
                }, {
                    onInit: "onInit"
                }), ɵprd(1024, null, NG_VALUE_ACCESSOR, function(p0_0) {
                    return [p0_0];
                }, [ɵk]), ɵdid(18, 671744, null, 0, NgModel, [[8, null], [8, null], [8, null], [6, NG_VALUE_ACCESSOR]], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), ɵprd(2048, null, NgControl, null, [NgModel]), ɵdid(20, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function(_ck, _v) {
                    var _co = _v.component;
                    _ck(_v, 2, 0);
                    var currVal_2 = "";
                    var currVal_3 = "e";
                    var currVal_4 = 200;
                    _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4);
                    _ck(_v, 6, 0);
                    var currVal_5 = false;
                    var currVal_6 = _co.treeCols;
                    var currVal_7 = true;
                    var currVal_8 = "id";
                    var currVal_9 = false;
                    var currVal_10 = false;
                    var currVal_11 = false;
                    var currVal_12 = false;
                    var currVal_13 = false;
                    var currVal_14 = false;
                    var currVal_15 = false;
                    var currVal_16 = _co.treeData;
                    _ck(_v, 9, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]);
                    var currVal_24 = _co.classEditorOptions;
                    _ck(_v, 16, 0, currVal_24);
                    var currVal_25 = _co.classCode;
                    _ck(_v, 18, 0, currVal_25);
                }, function(_ck, _v) {
                    var currVal_0 = ɵnov(_v, 2).cls;
                    _ck(_v, 1, 0, currVal_0);
                    var currVal_1 = ɵnov(_v, 6).cls;
                    _ck(_v, 4, 0, currVal_1);
                    var currVal_17 = ɵnov(_v, 20).ngClassUntouched;
                    var currVal_18 = ɵnov(_v, 20).ngClassTouched;
                    var currVal_19 = ɵnov(_v, 20).ngClassPristine;
                    var currVal_20 = ɵnov(_v, 20).ngClassDirty;
                    var currVal_21 = ɵnov(_v, 20).ngClassValid;
                    var currVal_22 = ɵnov(_v, 20).ngClassInvalid;
                    var currVal_23 = ɵnov(_v, 20).ngClassPending;
                    _ck(_v, 13, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);
                });
            }
            function View_ClassEditorComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "class-editor", [], null, null, null, View_ClassEditorComponent_0, RenderType_ClassEditorComponent)), ɵdid(1, 245760, null, 0, ClassEditorComponent, [DomService, NgZone], null, null)], function(_ck, _v) {
                    _ck(_v, 1, 0);
                }, null);
            }
            var ClassEditorComponentNgFactory = ɵccf("class-editor", ClassEditorComponent, View_ClassEditorComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_FormDesignerComponent = [styles$5];
            var RenderType_FormDesignerComponent = ɵcrt({
                encapsulation: 0,
                styles: styles_FormDesignerComponent,
                data: {}
            });
            function View_FormDesignerComponent_1(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 8, "div", [["class", "designerCodePanel flex-fill position-relative"]], null, null, null, null, null)), (_l()(),
                ɵeld(1, 0, null, null, 7, "angular-monaco-editor", [["class", "customMonacoEditor"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onInit"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("ngModelChange" === en)) {
                        var pd_0 = ((_co.monacoCode = $event) !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("onInit" === en)) {
                        var pd_1 = (_co.onMonacoInit($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    return ad;
                }, View_ɵk_0, RenderType_ɵk)), ɵprd(512, null, ɵp, ɵp, []), ɵprd(512, null, ɵm, ɵm, []), ɵdid(4, 4374528, null, 0, ɵk, [ɵp, NgZone, ɵm, ɵn], {
                    options: [0, "options"]
                }, {
                    onInit: "onInit"
                }), ɵprd(1024, null, NG_VALUE_ACCESSOR, function(p0_0) {
                    return [p0_0];
                }, [ɵk]), ɵdid(6, 671744, null, 0, NgModel, [[8, null], [8, null], [8, null], [6, NG_VALUE_ACCESSOR]], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), ɵprd(2048, null, NgControl, null, [NgModel]), ɵdid(8, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_7 = ɵEMPTY_MAP;
                    _ck(_v, 4, 0, currVal_7);
                    var currVal_8 = _co.monacoCode;
                    _ck(_v, 6, 0, currVal_8);
                }, function(_ck, _v) {
                    var currVal_0 = ɵnov(_v, 8).ngClassUntouched;
                    var currVal_1 = ɵnov(_v, 8).ngClassTouched;
                    var currVal_2 = ɵnov(_v, 8).ngClassPristine;
                    var currVal_3 = ɵnov(_v, 8).ngClassDirty;
                    var currVal_4 = ɵnov(_v, 8).ngClassValid;
                    var currVal_5 = ɵnov(_v, 8).ngClassInvalid;
                    var currVal_6 = ɵnov(_v, 8).ngClassPending;
                    _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
                });
            }
            function View_FormDesignerComponent_2(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 2, "div", [["class", "classCodePanel flex-fill"]], null, null, null, null, null)), (_l()(),
                ɵeld(1, 0, null, null, 1, "class-editor", [], null, null, null, View_ClassEditorComponent_0, RenderType_ClassEditorComponent)), ɵdid(2, 245760, [[4, 4], ["classEditorComponent", 4]], 0, ClassEditorComponent, [DomService, NgZone], null, null)], function(_ck, _v) {
                    _ck(_v, 2, 0);
                }, null);
            }
            function View_FormDesignerComponent_0(_l) {
                return ɵvid(0, [ɵqud(402653184, 1, {
                    controlTree: 0
                }), ɵqud(402653184, 2, {
                    controlBox: 0
                }), ɵqud(402653184, 3, {
                    schemaTree: 0
                }), ɵqud(671088640, 4, {
                    classEditorComponent: 0
                }), (_l()(),
                ɵeld(4, 0, null, null, 62, "div", [["class", "formDesigner fd-page fd-page-navigate"], ["style", "overflow: visible"]], null, null, null, null, null)), (_l()(),
                ɵeld(5, 0, null, null, 61, "farris-splitter", [["class", "d-flex fd-page-content f-component-splitter"]], [[2, "f-component-splitter", null]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵdid(6, 1163264, null, 1, SplitterComponent, [], null, null), ɵqud(603979776, 5, {
                    splitterPane: 1
                }), (_l()(),
                ɵeld(8, 0, null, 0, 27, "farris-splitter-pane", [["class", "px-0 f-component-splitter-pane border-top fd-page-content-nav"], ["ngResizable", ""], ["style", "width: 260px"]], [[2, "f-component-splitter-pane", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(9, 4931584, null, 0, AngularResizableDirective, [ElementRef, Renderer2], {
                    ngResizable: [0, "ngResizable"],
                    rzHandles: [1, "rzHandles"],
                    rzMinWidth: [2, "rzMinWidth"],
                    rzMaxWidth: [3, "rzMaxWidth"]
                }, null), ɵdid(10, 114688, [[5, 4]], 0, SplitterPaneComponent, [], null, null), (_l()(),
                ɵeld(11, 0, null, 0, 24, "div", [["class", "pane-content"]], null, null, null, null, null)), (_l()(),
                ɵeld(12, 0, null, null, 23, "div", [["class", "leftBar border-right d-flex flex-column"]], null, null, null, null, null)), (_l()(),
                ɵeld(13, 0, null, null, 10, "div", [["class", "tab-panel"]], null, null, null, null, null)), (_l()(),
                ɵeld(14, 0, null, null, 9, "ul", [["class", "tab-container"]], null, null, null, null, null)), (_l()(),
                ɵeld(15, 0, null, null, 2, "li", [["class", "left-tab-item"]], [[2, "checked", null]], [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.changeSideBarTabTo("controlTree") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(16, 0, null, null, 1, "a", [["class", "tab-label"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u63A7\u4EF6\u6811"])), (_l()(),
                ɵeld(18, 0, null, null, 2, "li", [["class", "left-tab-item"]], [[2, "checked", null]], [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.changeSideBarTabTo("controllist") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(19, 0, null, null, 1, "a", [["class", "tab-label"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u5DE5\u5177\u7BB1"])), (_l()(),
                ɵeld(21, 0, null, null, 2, "li", [["class", "left-tab-item"]], [[2, "checked", null]], [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.changeSideBarTabTo("schemaTree") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(22, 0, null, null, 1, "a", [["class", "tab-label"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u5B9E\u4F53\u6811"])), (_l()(),
                ɵeld(24, 0, null, null, 11, "div", [["class", "tab-content flex-fill"]], null, null, null, null, null)), (_l()(),
                ɵeld(25, 0, null, null, 4, "div", [["class", "h-100 f-utils-overflow-auto"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(),
                ɵeld(26, 0, null, null, 3, "control-tree", [], null, [[null, "changeControlTreeNode"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("changeControlTreeNode" === en)) {
                        var pd_0 = (_co.changeControlTreeNode($event) !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, View_ControlTreeComponent_0, RenderType_ControlTreeComponent)), ɵprd(512, null, ɵg, ɵg, [DomService, FormBasicService]), ɵprd(512, null, ɵh, ɵh, [DomService, FormBasicService]), ɵdid(29, 638976, [[1, 4], ["controlTree", 4]], 0, ControlTreeComponent, [ɵg, ɵh, NgZone, NotifyService, RefreshFormService, ChangeDetectorRef], {
                    domJson: [0, "domJson"],
                    beforeShowContextMenu: [1, "beforeShowContextMenu"]
                }, {
                    changeControlTreeNode: "changeControlTreeNode"
                }), (_l()(),
                ɵeld(30, 0, null, null, 2, "div", [["class", "h-100 f-utils-overflow-auto"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(),
                ɵeld(31, 0, null, null, 1, "control-box", [], null, null, null, View_ControlBoxComponent_0, RenderType_ControlBoxComponent)), ɵdid(32, 245760, [[2, 4], ["controlBox", 4]], 0, ControlBoxComponent, [HttpClient, NgZone], {
                    designerBuilder: [0, "designerBuilder"]
                }, null), (_l()(),
                ɵeld(33, 0, null, null, 2, "div", [["class", "h-100"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(),
                ɵeld(34, 0, null, null, 1, "schema-tree", [], null, null, null, View_SchemaTreeComponent_0, RenderType_SchemaTreeComponent)), ɵdid(35, 114688, [[3, 4], ["schemaTree", 4]], 0, SchemaTreeComponent, [SchemaService, NgZone], {
                    designerBuilder: [0, "designerBuilder"]
                }, null), (_l()(),
                ɵeld(36, 0, null, 0, 30, "div", [["class", "fd-page-content-main f-component-splitter-pane"]], null, null, null, null, null)), (_l()(),
                ɵeld(37, 0, null, null, 29, "div", [["class", "pane-content"]], null, null, null, null, null)), (_l()(),
                ɵeld(38, 0, null, null, 28, "div", [["class", "d-block w-100 h-100"]], null, null, null, null, null)), (_l()(),
                ɵeld(39, 0, null, null, 27, "div", [["class", "mainPanel w-100 h-100 d-flex flex-column"]], null, null, null, null, null)), (_l()(),
                ɵeld(40, 0, null, null, 15, "div", [["class", "d-flex h-100"], ["style", "overflow: hidden"]], null, null, null, null, null)), (_l()(),
                ɵeld(41, 0, null, null, 10, "farris-splitter", [["class", "fd-page-content f-component-splitter"], ["style", "height: inherit"]], [[4, "display", null], [2, "f-component-splitter", null]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵdid(42, 1163264, null, 1, SplitterComponent, [], null, null), ɵqud(603979776, 6, {
                    splitterPane: 1
                }), (_l()(),
                ɵeld(44, 0, null, 0, 3, "div", [["class", "flex-fill px-0 f-component-splitter-pane border-top f-utils-overflow-hidden"]], null, null, null, null, null)), (_l()(),
                ɵeld(45, 0, null, null, 2, "div", [["class", "editorDiv flex-fill h-100"]], null, null, null, null, null)), (_l()(),
                ɵeld(46, 0, null, null, 1, "div", [["class", "editorPanel d-flex flex-fill flex-column PC"]], null, null, null, null, null)), ɵdid(47, 4866048, null, 0, FAreaResponseDirective, [ElementRef, NgZone, Renderer2], {
                    autoResponse: [0, "autoResponse"],
                    enableResponse: [1, "enableResponse"]
                }, null), (_l()(),
                ɵeld(48, 0, null, 0, 3, "div", [["class", "fd-page-content-nav f-component-splitter-pane propertyResizeLeft h-100"], ["ngResizable", ""], ["style", "width: 300px"]], null, null, null, null, null)), ɵdid(49, 4931584, null, 0, AngularResizableDirective, [ElementRef, Renderer2], {
                    ngResizable: [0, "ngResizable"],
                    rzHandles: [1, "rzHandles"],
                    rzMinWidth: [2, "rzMinWidth"],
                    rzMaxWidth: [3, "rzMaxWidth"]
                }, null), (_l()(),
                ɵeld(50, 0, null, null, 1, "app-property-panel", [["class", "flex-fill"], ["isWhiteTheme", "true"]], null, [[null, "selectedTabChanged"], [null, "propertyChanged"], [null, "submitModal"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("selectedTabChanged" === en)) {
                        var pd_0 = (_co.onSelectedPropertyTabChanged($event) !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("propertyChanged" === en)) {
                        var pd_1 = (_co.onPropertyChanged($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    if (("submitModal" === en)) {
                        var pd_2 = (_co.onPropertyModalChanged($event) !== false);
                        ad = (pd_2 && ad);
                    }
                    return ad;
                }, View_PropertyPanelComponent_0, RenderType_PropertyPanelComponent)), ɵdid(51, 638976, null, 0, PropertyPanelComponent, [], {
                    isWhiteTheme: [0, "isWhiteTheme"],
                    propertyConfig: [1, "propertyConfig"],
                    propertyData: [2, "propertyData"],
                    dynamicControl: [3, "dynamicControl"],
                    showCloseBtn: [4, "showCloseBtn"],
                    selectedTabId: [5, "selectedTabId"]
                }, {
                    propertyChanged: "propertyChanged",
                    submitModal: "submitModal",
                    selectedTabChanged: "selectedTabChanged"
                }), (_l()(),
                ɵand(16777216, null, null, 1, null, View_FormDesignerComponent_1)), ɵdid(53, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (_l()(),
                ɵand(16777216, null, null, 1, null, View_FormDesignerComponent_2)), ɵdid(55, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (_l()(),
                ɵeld(56, 0, null, null, 10, "div", [["class", "tab-panel"]], null, null, null, null, null)), (_l()(),
                ɵeld(57, 0, null, null, 9, "div", [["class", "tab-container"]], null, null, null, null, null)), (_l()(),
                ɵeld(58, 0, null, null, 2, "div", [["class", "bottom-tab-item ml-3"]], [[2, "checked", null]], [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.changeBottomBar("formDesigner") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(59, 0, null, null, 1, "a", [["class", "tab-label"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u53EF\u89C6\u5316\u8BBE\u8BA1\u5668"])), (_l()(),
                ɵeld(61, 0, null, null, 2, "div", [["class", "bottom-tab-item"]], [[2, "checked", null]], [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.changeBottomBar("codeEditor") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(62, 0, null, null, 1, "a", [["class", "tab-label"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u4EE3\u7801\u7F16\u8F91\u5668"])), (_l()(),
                ɵeld(64, 0, null, null, 2, "div", [["class", "bottom-tab-item"]], [[2, "checked", null]], [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.changeBottomBar("classEditor") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(65, 0, null, null, 1, "a", [["class", "tab-label"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u81EA\u5B9A\u4E49\u6837\u5F0F"]))], function(_ck, _v) {
                    var _co = _v.component;
                    _ck(_v, 6, 0);
                    var currVal_2 = "";
                    var currVal_3 = "e";
                    var currVal_4 = 200;
                    var currVal_5 = 450;
                    _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5);
                    _ck(_v, 10, 0);
                    var currVal_10 = _co.domJson;
                    var currVal_11 = _co.beforeShowContextMenu;
                    _ck(_v, 29, 0, currVal_10, currVal_11);
                    var currVal_13 = _co.designBuilder;
                    _ck(_v, 32, 0, currVal_13);
                    var currVal_15 = _co.designBuilder;
                    _ck(_v, 35, 0, currVal_15);
                    _ck(_v, 42, 0);
                    var currVal_18 = true;
                    var currVal_19 = true;
                    _ck(_v, 47, 0, currVal_18, currVal_19);
                    var currVal_20 = "";
                    var currVal_21 = "w";
                    var currVal_22 = 100;
                    var currVal_23 = 450;
                    _ck(_v, 49, 0, currVal_20, currVal_21, currVal_22, currVal_23);
                    var currVal_24 = "true";
                    var currVal_25 = _co.propertyConfig;
                    var currVal_26 = _co.propertyData;
                    var currVal_27 = true;
                    var currVal_28 = false;
                    var currVal_29 = _co.selectedPropertyTabId;
                    _ck(_v, 51, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);
                    var currVal_30 = (_co.bottomTabActive === "codeEditor");
                    _ck(_v, 53, 0, currVal_30);
                    var currVal_31 = (_co.bottomTabActive === "classEditor");
                    _ck(_v, 55, 0, currVal_31);
                }, function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_0 = ɵnov(_v, 6).cls;
                    _ck(_v, 5, 0, currVal_0);
                    var currVal_1 = ɵnov(_v, 10).cls;
                    _ck(_v, 8, 0, currVal_1);
                    var currVal_6 = (_co.leftTabActive === "controlTree");
                    _ck(_v, 15, 0, currVal_6);
                    var currVal_7 = (_co.leftTabActive === "controllist");
                    _ck(_v, 18, 0, currVal_7);
                    var currVal_8 = (_co.leftTabActive === "schemaTree");
                    _ck(_v, 21, 0, currVal_8);
                    var currVal_9 = (_co.leftTabActive !== "controlTree");
                    _ck(_v, 25, 0, currVal_9);
                    var currVal_12 = (_co.leftTabActive !== "controllist");
                    _ck(_v, 30, 0, currVal_12);
                    var currVal_14 = (_co.leftTabActive !== "schemaTree");
                    _ck(_v, 33, 0, currVal_14);
                    var currVal_16 = ((_co.bottomTabActive === "formDesigner") ? "flex" : "none");
                    var currVal_17 = ɵnov(_v, 42).cls;
                    _ck(_v, 41, 0, currVal_16, currVal_17);
                    var currVal_32 = (_co.bottomTabActive === "formDesigner");
                    _ck(_v, 58, 0, currVal_32);
                    var currVal_33 = (_co.bottomTabActive === "codeEditor");
                    _ck(_v, 61, 0, currVal_33);
                    var currVal_34 = (_co.bottomTabActive === "classEditor");
                    _ck(_v, 64, 0, currVal_34);
                });
            }
            function View_FormDesignerComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 2, "app-form-designer", [], null, null, null, View_FormDesignerComponent_0, RenderType_FormDesignerComponent)), ɵprd(512, null, ControlPropertyChangedService, ControlPropertyChangedService, [DomService, DesignViewModelService, RefreshFormService]), ɵdid(2, 245760, null, 0, FormDesignerComponent, [DomService, SchemaService, DesignViewModelService, ControlService, StateMachineService, DataStatesService, BsModalService, MessagerService, ComponentFactoryResolver, HttpClient, Injector, DesignerHostSettingService, ControlPropertyChangedService, NgZone, DragResolveService, ControlCreatorService, RefreshFormService, FormBasicService, WebCmdService], null, null)], function(_ck, _v) {
                    _ck(_v, 2, 0);
                }, null);
            }
            var FormDesignerComponentNgFactory = ɵccf("app-form-designer", FormDesignerComponent, View_FormDesignerComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_FormEditorComponent = [styles];
            var RenderType_FormEditorComponent = ɵcrt({
                encapsulation: 0,
                styles: styles_FormEditorComponent,
                data: {}
            });
            function View_FormEditorComponent_1(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 8, "div", [["class", "viewTypePanel"]], null, null, null, null, null)), (_l()(),
                ɵeld(1, 0, null, null, 3, "div", [["class", "active"]], null, null, null, null, null)), (_l()(),
                ɵeld(2, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(),
                ɵeld(3, 0, null, null, 0, "span", [["class", "f-icon f-icon-perspective_view"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u8BBE\u8BA1\u5668 "])), (_l()(),
                ɵeld(5, 0, null, null, 3, "div", [], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onClickCodeEditor() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(),
                ɵeld(7, 0, null, null, 0, "span", [["class", "f-icon f-icon-source-code"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u4EE3\u7801 "]))], null, null);
            }
            function View_FormEditorComponent_2(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 2, "div", [["class", "mainContent h-100"]], null, null, null, null, null)), (_l()(),
                ɵeld(1, 0, null, null, 1, "app-form-settings", [], null, null, null, View_FormSettingsComponent_0, RenderType_FormSettingsComponent)), ɵdid(2, 114688, null, 0, FormSettingsComponent, [DomService, NotifyService, MessagerService], null, null)], function(_ck, _v) {
                    _ck(_v, 2, 0);
                }, null);
            }
            function View_FormEditorComponent_0(_l) {
                return ɵvid(0, [ɵqud(402653184, 1, {
                    formDesigner: 0
                }), ɵqud(402653184, 2, {
                    formSaveAsComponent: 0
                }), (_l()(),
                ɵeld(2, 0, null, null, 38, "div", [["class", "formEditor d-flex flex-column w-100 h-100"], ["style", "overflow:visible"]], null, null, null, null, null)), (_l()(),
                ɵeld(3, 0, null, null, 28, "div", [["class", "toolbar"]], null, null, null, null, null)), (_l()(),
                ɵand(16777216, null, null, 1, null, View_FormEditorComponent_1)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (_l()(),
                ɵeld(6, 0, null, null, 9, "div", [["class", "showTypePanel d-flex border-left border-right"]], null, null, null, null, null)), (_l()(),
                ɵeld(7, 0, null, null, 2, "div", [["class", "showTypeItem"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onChangeShowDesigner("entityDesigner") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(8, 0, null, null, 1, "div", [], [[2, "active", null]], null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u5B9E\u4F53"])), (_l()(),
                ɵeld(10, 0, null, null, 2, "div", [["class", "showTypeItem"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onChangeShowDesigner("formDesigner") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(11, 0, null, null, 1, "div", [], [[2, "active", null]], null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u9875\u9762 "])), (_l()(),
                ɵeld(13, 0, null, null, 2, "div", [["class", "showTypeItem"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.onChangeShowDesigner("formSetting") !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(14, 0, null, null, 1, "div", [], [[2, "active", null]], null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u914D\u7F6E "])), (_l()(),
                ɵeld(16, 0, null, null, 15, "div", [["class", "d-flex toolbarPanel"]], null, null, null, null, null)), (_l()(),
                ɵeld(17, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(),
                ɵeld(18, 0, null, null, 2, "button", [["class", "btn ide-toolbar-btn disable"]], null, null, null, null, null)), (_l()(),
                ɵeld(19, 0, null, null, 0, "span", [["class", "ide-icon ide-icon-saveas"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u53E6\u5B58\u4E3A "])), (_l()(),
                ɵeld(21, 0, null, null, 2, "button", [["class", "btn ide-toolbar-btn"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.publishMenu() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(22, 0, null, null, 0, "span", [["class", "ide-icon ide-icon-publish"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u53D1\u5E03\u83DC\u5355 "])), (_l()(),
                ɵeld(24, 0, null, null, 2, "button", [["class", "btn ide-toolbar-btn"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.publishWorkflow() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵeld(25, 0, null, null, 0, "span", [["class", "ide-icon ide-icon-publish-process"]], null, null, null, null, null)), (_l()(),
                ɵted(-1, null, ["\u53D1\u5E03\u5230\u5DE5\u4F5C\u6D41 "])), (_l()(),
                ɵeld(27, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(),
                ɵeld(28, 0, null, null, 1, "button", [["class", "btn btn-secondary mr-2"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.runForm() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵted(-1, null, [" \u8C03\u8BD5 "])), (_l()(),
                ɵeld(30, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("click" === en)) {
                        var pd_0 = (_co.saveForm() !== false);
                        ad = (pd_0 && ad);
                    }
                    return ad;
                }, null, null)), (_l()(),
                ɵted(-1, null, ["\u4FDD\u5B58 "])), (_l()(),
                ɵeld(32, 0, null, null, 2, "div", [["class", "mainContent h-100"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(),
                ɵeld(33, 0, null, null, 1, "app-vo-designer", [], null, null, null, View_VoDesignerComponent_0, RenderType_VoDesignerComponent)), ɵdid(34, 114688, null, 0, VoDesignerComponent, [VoMetadataService], null, null), (_l()(),
                ɵeld(35, 0, null, null, 3, "div", [["class", "mainContent h-100"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(),
                ɵeld(36, 0, null, null, 2, "app-form-designer", [], null, null, null, View_FormDesignerComponent_0, RenderType_FormDesignerComponent)), ɵprd(512, null, ControlPropertyChangedService, ControlPropertyChangedService, [DomService, DesignViewModelService, RefreshFormService]), ɵdid(38, 245760, [[1, 4]], 0, FormDesignerComponent, [DomService, SchemaService, DesignViewModelService, ControlService, StateMachineService, DataStatesService, BsModalService, MessagerService, ComponentFactoryResolver, HttpClient, Injector, DesignerHostSettingService, ControlPropertyChangedService, NgZone, DragResolveService, ControlCreatorService, RefreshFormService, FormBasicService, WebCmdService], null, null), (_l()(),
                ɵand(16777216, null, null, 1, null, View_FormEditorComponent_2)), ɵdid(40, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (_l()(),
                ɵeld(41, 0, null, null, 2, "form-save-as", [], null, null, null, View_FormSaveAsComponent_0, RenderType_FormSaveAsComponent)), ɵprd(4608, null, ɵb, ɵb, [Injector, GSPMetadataService, FormBasicService]), ɵdid(43, 49152, [[2, 4], ["formSaveAsComponent", 4]], 0, FormSaveAsComponent, [Injector], null, null)], function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_0 = (_co.formBasicService.envType === "designer");
                    _ck(_v, 5, 0, currVal_0);
                    _ck(_v, 34, 0);
                    _ck(_v, 38, 0);
                    var currVal_6 = (_co.showDesignerType === "formSetting");
                    _ck(_v, 40, 0, currVal_6);
                }, function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_1 = (_co.showDesignerType === "entityDesigner");
                    _ck(_v, 8, 0, currVal_1);
                    var currVal_2 = (_co.showDesignerType === "formDesigner");
                    _ck(_v, 11, 0, currVal_2);
                    var currVal_3 = (_co.showDesignerType === "formSetting");
                    _ck(_v, 14, 0, currVal_3);
                    var currVal_4 = (_co.showDesignerType !== "entityDesigner");
                    _ck(_v, 32, 0, currVal_4);
                    var currVal_5 = (_co.showDesignerType !== "formDesigner");
                    _ck(_v, 35, 0, currVal_5);
                });
            }
            function View_FormEditorComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 2, "webide-form-editor", [], null, null, null, View_FormEditorComponent_0, RenderType_FormEditorComponent)), ɵprd(512, null, VoMetadataService, VoMetadataService, [HttpClient, GSPMetadataService, MessagerService, Injector]), ɵdid(2, 49152, null, 0, FormEditorComponent, [Injector, NotifyService, DomService, BsModalService, LoadingService, MessagerService, FormBasicService, ComponentFactoryResolver, StateMachineService, DataStatesService, WebCmdService, VoMetadataService], null, null)], null, null);
            }
            var FormEditorComponentNgFactory = ɵccf("webide-form-editor", FormEditorComponent, View_FormEditorComponent_Host_0, {}, {
                switchView: "switchView"
            }, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles$7 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_AppComponent = [styles$7];
            var RenderType_AppComponent = ɵcrt({
                encapsulation: 0,
                styles: styles_AppComponent,
                data: {}
            });
            function View_AppComponent_0(_l) {
                return ɵvid(0, [ɵqud(402653184, 1, {
                    codeViewComponent: 0
                }), ɵqud(402653184, 2, {
                    formViewComponent: 0
                }), (_l()(),
                ɵeld(2, 0, null, null, 3, "div", [["class", "h-100"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(),
                ɵeld(3, 0, null, null, 2, "webide-form-editor", [], null, [[null, "switchView"], [null, "formSavedEmiiter"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("switchView" === en)) {
                        var pd_0 = (_co.changeViewType("codeEditor", $event) !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("formSavedEmiiter" === en)) {
                        var pd_1 = (_co.onFormSaved() !== false);
                        ad = (pd_1 && ad);
                    }
                    return ad;
                }, View_FormEditorComponent_0, RenderType_FormEditorComponent)), ɵprd(512, null, VoMetadataService, VoMetadataService, [HttpClient, GSPMetadataService, MessagerService, Injector]), ɵdid(5, 49152, [[2, 4]], 0, FormEditorComponent, [Injector, NotifyService, DomService, BsModalService, LoadingService, MessagerService, FormBasicService, ComponentFactoryResolver, StateMachineService, DataStatesService, WebCmdService, VoMetadataService], null, {
                    switchView: "switchView"
                }), (_l()(),
                ɵeld(6, 0, null, null, 2, "div", [["class", "h-100"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(),
                ɵeld(7, 0, null, null, 1, "webide-code-view", [], null, [[null, "switchView"], [null, "saveAll"]], function(_v, en, $event) {
                    var ad = true;
                    var _co = _v.component;
                    if (("switchView" === en)) {
                        var pd_0 = (_co.changeViewType("formEditor") !== false);
                        ad = (pd_0 && ad);
                    }
                    if (("saveAll" === en)) {
                        var pd_1 = (_co.onCodeEditorSaved($event) !== false);
                        ad = (pd_1 && ad);
                    }
                    return ad;
                }, View_CodeViewComponent_0, RenderType_CodeViewComponent)), ɵdid(8, 4243456, [[1, 4]], 0, CodeViewComponent, [ChangeDetectorRef, ɵa, ContextService, ChangeDetectorRef, ɵe], {
                    entryFilePath: [0, "entryFilePath"]
                }, {
                    switchView: "switchView",
                    saveAll: "saveAll"
                })], function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_2 = _co.metadataPath;
                    _ck(_v, 8, 0, currVal_2);
                }, function(_ck, _v) {
                    var _co = _v.component;
                    var currVal_0 = (_co.showType === "codeEditor");
                    _ck(_v, 2, 0, currVal_0);
                    var currVal_1 = (_co.showType === "formEditor");
                    _ck(_v, 6, 0, currVal_1);
                });
            }
            function View_AppComponent_Host_0(_l) {
                return ɵvid(0, [(_l()(),
                ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), ɵdid(1, 49152, null, 0, AppComponent, [NotifyService, WebCmdService], null, null)], null, null);
            }
            var AppComponentNgFactory = ɵccf("app-root", AppComponent, View_AppComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var AppModuleNgFactory = ɵcmf(AppModule, [AppComponent], function(_l) {
                return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [PopoverContainerComponentNgFactory, 
                NotifyContainerComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, TimePickerPanelComponentNgFactory, 
                CalendarComponentNgFactory, LoadingComponentNgFactory, TooltipComponentNgFactory, PopupComponentNgFactory, StringFilterCellComponentNgFactory,
                 NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory,
                  NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, SelectMetadataComponentNgFactory,
                   ɵbNgFactory, SelectMetadataRTComponentNgFactory, ViewModelComponentNgFactory, PropertyPanelComponentNgFactory, TextboxPropertyComponentNgFactory,
                    NumberPropertyComponentNgFactory, CombolistPropertyComponentNgFactory, DatePropertyComponentNgFactory, ModalPropertyComponentNgFactory,
                     UniformPropertyComponentNgFactory, IdeEventsEditorComponentNgFactory, FarrisContextMenuComponentNgFactory, MessagerComponentNgFactory,
                      DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory,
                       LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory,
                        ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory, ɵbNgFactory$1, ɵcNgFactory, ɵdNgFactory,
                         ɵeNgFactory, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory,
                          DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, FilterPanelComponentNgFactory, ɵdNgFactory$1, ɵqNgFactory, 
                          PublishMenuComponentNgFactory, NgbTooltipWindowNgFactory, ɵlNgFactory$1, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, 
                          WindowComponentNgFactory, WindowTitleBarComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory,
                           FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory,
                            FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, ɵaNgFactory$1, ExpressioneditorComponentNgFactory, 
                            ComputeRuleEditorComponentNgFactory, StyleEditorComponentNgFactory, BindingEditorComponentNgFactory, 
                            ItemCollectionEditorComponentNgFactory, InnerComponentCreatorComponentNgFactory, CollectionWithPropertyEditorComponentNgFactory,
                             IconSelectEditorComponentNgFactory, CodeEditorComponentNgFactory, ExpressionEditorComponentNgFactory,
                              JavaScriptBooleanEditorComponentNgFactory, SelectSchemaFieldEditorComponentNgFactory, FormSaveAsComponentNgFactory, 
                              UpdateSchemaComponentNgFactory, FieldManagerComponentNgFactory, BindingCustomEditorComponentNgFactory, 
                              SelectMappingComponentNgFactory, ImportCmpComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory,
                               ɵaNgFactory$2, ResponseLayoutEditorComponentNgFactory, GroupHeaderFormComponentNgFactory, SelectColumnsComponentNgFactory, 
                               ColumnWidthSettingComponentNgFactory, SelectHelpTextFieldComponentNgFactory, SelectHelpMetadataComponentNgFactory, 
                               SelectHelpConditionComponentNgFactory, FormLayoutSettingComponentNgFactory, ɵbcNgFactory, ɵbdNgFactory, ɵbeNgFactory, 
                               ɵbfNgFactory, ColumnGroupEditorComponentNgFactory, ɵbgNgFactory, ɵbiNgFactory, ɵbkNgFactory, ɵbhNgFactory,
                                SelectHelpDisplayFieldsComponentNgFactory, ɵblNgFactory, BizElementsGridComponentNgFactory, FormEditorComponentNgFactory,
                                 CommonFileNavTreeComponentNgFactory, ɵpNgFactory, ɵqNgFactory$1, CodeViewComponentNgFactory, AppComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(5120, LOCALE_ID, ɵangular_packages_core_core_s, [[3, LOCALE_ID]]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, Compiler, Compiler, []), ɵmpd(5120, APP_ID, ɵangular_packages_core_core_h, []), ɵmpd(5120, IterableDiffers, ɵangular_packages_core_core_q, []), ɵmpd(5120, KeyValueDiffers, ɵangular_packages_core_core_r, []), ɵmpd(4608, DomSanitizer, ɵDomSanitizerImpl, [DOCUMENT]), ɵmpd(6144, Sanitizer, null, [DomSanitizer]), ɵmpd(4608, HAMMER_GESTURE_CONFIG, HammerGestureConfig, []), ɵmpd(5120, EVENT_MANAGER_PLUGINS, function(p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
                    return [new ɵDomEventsPlugin(p0_0,p0_1,p0_2), new ɵKeyEventsPlugin(p1_0), new ɵHammerGesturesPlugin(p2_0,p2_1,p2_2,p2_3)];
                }, [DOCUMENT, NgZone, PLATFORM_ID, DOCUMENT, DOCUMENT, HAMMER_GESTURE_CONFIG, ɵConsole, [2, HAMMER_LOADER]]), ɵmpd(4608, EventManager, EventManager, [EVENT_MANAGER_PLUGINS, NgZone]), ɵmpd(135680, ɵDomSharedStylesHost, ɵDomSharedStylesHost, [DOCUMENT]), ɵmpd(4608, ɵDomRendererFactory2, ɵDomRendererFactory2, [EventManager, ɵDomSharedStylesHost, APP_ID]), ɵmpd(5120, AnimationDriver, ɵangular_packages_platform_browser_animations_animations_a, []), ɵmpd(5120, ɵAnimationStyleNormalizer, ɵangular_packages_platform_browser_animations_animations_b, []), ɵmpd(4608, ɵAnimationEngine, ɵInjectableAnimationEngine, [DOCUMENT, AnimationDriver, ɵAnimationStyleNormalizer]), ɵmpd(5120, RendererFactory2, ɵangular_packages_platform_browser_animations_animations_c, [ɵDomRendererFactory2, ɵAnimationEngine, NgZone]), ɵmpd(6144, ɵSharedStylesHost, null, [ɵDomSharedStylesHost]), ɵmpd(4608, Testability, Testability, [NgZone]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function(p0_0) {
                    return [p0_0];
                }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(6144, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(4608, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(6144, HttpBackend, null, [HttpXhrBackend]), ɵmpd(4608, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(4608, HttpClient, HttpClient, [HttpHandler]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(5120, GSPMetadataService, ɵa$1, [HttpClient, "url"]), ɵmpd(4608, ɵd, ɵd, [GSPMetadataService]), ɵmpd(5120, GSPMetadataRTService, ɵa$2, [HttpClient, "url"]), ɵmpd(4608, ɵb$1, ɵb$1, [GSPMetadataRTService]), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, PaginationService, PaginationService, []), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, DialogService, DialogService, []), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService, FilterService, []), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, SolutionService, SolutionService, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, OverlayContainer, FullscreenOverlayContainer, [DOCUMENT]), ɵmpd(4608, Overlay, Overlay, [ScrollStrategyOptions, OverlayContainer, ComponentFactoryResolver, OverlayPositionBuilder, OverlayKeyboardDispatcher, Injector, NgZone, DOCUMENT, Directionality, [2, Location]]), ɵmpd(5120, ɵc, ɵd$1, [Overlay]), ɵmpd(4352, CacheService, ɵ0$1, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, CacheService]), ɵmpd(4608, CacheLocalStorage, CacheLocalStorage, []), ɵmpd(4608, CacheMemoryStorage, CacheMemoryStorage, []), ɵmpd(4608, CacheSessionStorage, CacheSessionStorage, []), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, AnimationBuilder, ɵBrowserAnimationBuilder, [RendererFactory2, DOCUMENT$1]), ɵmpd(4608, ɵm$1, ɵm$1, []), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$1, DialogService$1, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵmpd(4608, ExpressionEventService, ExpressionEventService, []), ɵmpd(4608, ExpressionService, ExpressionService, [Injector, ApplicationRef, ComponentFactoryResolver, HttpClient]), ɵmpd(4608, ContextMenuService, ContextMenuService, [Overlay, ScrollStrategyOptions]), ɵmpd(4608, DragDrop, DragDrop, [DOCUMENT, NgZone, ViewportRuler, DragDropRegistry]), ɵmpd(4608, ɵb$2, ɵb$2, []), ɵmpd(4608, ContextService, ContextService, [ɵb$2]), ɵmpd(4608, ɵc$1, ɵc$1, [IdService]), ɵmpd(4608, ɵd$2, ɵd$2, []), ɵmpd(4608, ɵa, ɵa, [Injector, ApplicationRef, ContextService, ɵc$1, ɵd$2, MessagerService, NotifyService]), ɵmpd(4608, ɵe, ɵe, [ɵa]), ɵmpd(4608, ɵn$1, ɵn$1, []), ɵmpd(4608, ɵl, ɵl, [ApplicationRef, ComponentFactoryResolver]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵm$2, ɵm$2, [ContextService, [2, IDE_CODE_VIEW_CONFIGER]]), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1024, ErrorHandler, ɵangular_packages_platform_browser_platform_browser_a, []), ɵmpd(1024, APP_INITIALIZER, function(p0_0) {
                    return [ɵangular_packages_platform_browser_platform_browser_j(p0_0)];
                }, [[2, NgProbeToken]]), ɵmpd(512, ApplicationInitStatus, ApplicationInitStatus, [[2, APP_INITIALIZER]]), ɵmpd(131584, ApplicationRef, ApplicationRef, [NgZone, ɵConsole, Injector, ErrorHandler, ComponentFactoryResolver, ApplicationInitStatus]), ɵmpd(1073742336, ApplicationModule, ApplicationModule, [ApplicationRef]), ɵmpd(1073742336, BrowserModule, BrowserModule, [[3, BrowserModule]]), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, FarrisDropdownModule, FarrisDropdownModule, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, PropertyEditorModule, PropertyEditorModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, GSPMetadataServiceModule, GSPMetadataServiceModule, []), ɵmpd(1073742336, CheckBoxModule, CheckBoxModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, TreeViewModule, TreeViewModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, ColorPickerModule, ColorPickerModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, MetadataSelectModule, MetadataSelectModule, []), ɵmpd(1073742336, MetadataRTSelectModule, MetadataRTSelectModule, []), ɵmpd(1073742336, GSPMetadataRTServiceModule, GSPMetadataRTServiceModule, []), ɵmpd(1073742336, EventsEditorModule, EventsEditorModule, []), ɵmpd(1073742336, PropertyPanelModule, PropertyPanelModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, BidiModule, BidiModule, []), ɵmpd(1073742336, PortalModule, PortalModule, []), ɵmpd(1073742336, PlatformModule, PlatformModule, []), ɵmpd(1073742336, ScrollingModule, ScrollingModule, []), ɵmpd(1073742336, OverlayModule, OverlayModule, []), ɵmpd(1073742336, ContextMenuModule, ContextMenuModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, ɵi, ɵi, []), ɵmpd(1073742336, CacheModule, CacheModule, []), ɵmpd(1073742336, GSPHttpModule, GSPHttpModule, []), ɵmpd(1073742336, RtfProductionHelpModule, RtfProductionHelpModule, []), ɵmpd(1073742336, IDEPublishMenuModule, IDEPublishMenuModule, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, BrowserAnimationsModule, BrowserAnimationsModule, []), ɵmpd(1073742336, ɵs, ɵs, []), ɵmpd(1073742336, ɵj, ɵj, []), ɵmpd(1073742336, SharedModule$3, SharedModule$3, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogsModule, DialogsModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, ExpressionModule, ExpressionModule, []), ɵmpd(1073742336, FarrisDesignerDevkitModule, FarrisDesignerDevkitModule, []), ɵmpd(1073742336, DragDropModule, DragDropModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, RateModule, RateModule, []), ɵmpd(1073742336, ResponseLayoutEditorModule, ResponseLayoutEditorModule, []), ɵmpd(1073742336, HeaderGroupEditorModule, HeaderGroupEditorModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, FarrisMobileDesignerUIModule, FarrisMobileDesignerUIModule, []), ɵmpd(1073742336, FormEditorModule, FormEditorModule, []), ɵmpd(1073742336, ɵx, ɵx, []), ɵmpd(1073742336, ɵt, ɵt, []), ɵmpd(1073742336, ɵy, ɵy, []), ɵmpd(1073742336, ɵbc, ɵbc, []), ɵmpd(1073742336, ɵbf, ɵbf, []), ɵmpd(1073742336, ɵbi, ɵbi, []), ɵmpd(1073742336, IdeCodeViewModule, IdeCodeViewModule, []), ɵmpd(1073742336, AppModule, AppModule, []), ɵmpd(256, ɵAPP_ROOT, true, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, "url", "", []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, {
                    minScrollbarLength: 20
                }, []), ɵmpd(256, ANIMATION_MODULE_TYPE, "BrowserAnimations", []), ɵmpd(256, ɵn$2, {
                    baseUrl: "assets",
                    defaultOptions: {
                        scrollBeyondLastLine: false
                    }
                }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(1024, GRID_EDITORS, function() {
                    return [{
                        name: "textarea",
                        value: DatagridTextareaComponent
                    }, {
                        name: "textbox",
                        value: DatagridTextboxComponent
                    }, {
                        name: "checkbox",
                        value: ɵa$3
                    }, {
                        name: "datepicker",
                        value: ɵb$3
                    }, {
                        name: "input-group",
                        value: ɵc$2
                    }, {
                        name: "select",
                        value: ɵd$3
                    }, {
                        name: "lookup",
                        value: ɵe$1
                    }, {
                        name: "numberbox",
                        value: ɵf
                    }, {
                        name: "combolist",
                        value: ɵg$1
                    }, {
                        name: "switch",
                        value: ɵh$1
                    }, {
                        name: "timepicker",
                        value: ɵi$1
                    }, {
                        name: "combo-lookup",
                        value: ɵj$1
                    }, {
                        name: "language-textbox",
                        value: ɵk$1
                    }, {
                        name: "enum-editor",
                        value: DatagridEnumEditorComponent
                    }, {
                        name: "filter-editor",
                        value: DatagridFilterEditorComponent
                    }, {
                        name: "sort-editor",
                        value: DatagridSortEditorComponent
                    }, {
                        name: "textarea",
                        value: DatagridTextareaComponent
                    }, {
                        name: "textbox",
                        value: DatagridTextboxComponent
                    }, {
                        name: "checkbox",
                        value: ɵa$3
                    }, {
                        name: "datepicker",
                        value: ɵb$3
                    }, {
                        name: "input-group",
                        value: ɵc$2
                    }, {
                        name: "select",
                        value: ɵd$3
                    }, {
                        name: "lookup",
                        value: ɵe$1
                    }, {
                        name: "numberbox",
                        value: ɵf
                    }, {
                        name: "combolist",
                        value: ɵg$1
                    }, {
                        name: "switch",
                        value: ɵh$1
                    }, {
                        name: "timepicker",
                        value: ɵi$1
                    }, {
                        name: "combo-lookup",
                        value: ɵj$1
                    }, {
                        name: "language-textbox",
                        value: ɵk$1
                    }, {
                        name: "enum-editor",
                        value: DatagridEnumEditorComponent
                    }, {
                        name: "filter-editor",
                        value: DatagridFilterEditorComponent
                    }, {
                        name: "sort-editor",
                        value: DatagridSortEditorComponent
                    }];
                }, []), ɵmpd(256, ɵc$3, {
                    autoFocus: false,
                    useBootstrap4: true
                }, []), ɵmpd(256, ɵn, {
                    baseUrl: "assets",
                    defaultOptions: {
                        theme: "vs-dark",
                        language: "json",
                        formatOnType: true,
                        foldingStrategy: "indentation",
                        folding: true,
                        showFoldingControls: "always",
                        automaticLayout: true,
                        scrollBeyondLastLine: false
                    }
                }, []), ɵmpd(256, IDE_CODE_VIEW_CONFIG, {
                    fileSuffix2PluginsUrlMap: {
                        ".ts": "plugins/code-editor-panel"
                    }
                }, [])]);
            });

            platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(function(err) {
                return console.error(err);
            });

        }
    };
});
