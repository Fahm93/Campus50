(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-294835f3"],{"684f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/spmb"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD SPMB")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-SOAL_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/spmb/soalpmb"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-head-question-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" SOAL PMB ")])],1)],1):t._e(),a("v-subheader",[t._v("DATA MHS. BARU")]),t.CAN_ACCESS("SPMB-PMB_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/spmb/pendaftaranbaru"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-plus")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PENDAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/spmb/formulirpendaftaran"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-file-document-edit-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIODATA ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-PERSYARATAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/spmb/persyaratan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-file-document-edit-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PERSYARATAN ")])],1)],1):t._e(),a("v-subheader",[t._v("UJIAN PMB")]),t.CAN_ACCESS("SPMB-PMB-JADWAL-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-list-item",{attrs:{link:"",to:"/spmb/jadwalujianpmb"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-calendar-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" JADWAL UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-NILAI-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-list-item",{attrs:{link:"",to:"/spmb/nilaiujian"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-calendar-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" NILAI UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-subheader",[t._v("LAPORAN")]):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?a("v-list-item",{attrs:{link:"",to:"/spmb/laporanfakultas"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-file-document-edit-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" LAPORAN FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-PRODI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/spmb/laporanprodi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-file-document-edit-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" LAPORAN PRODI ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-KELULUSAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/spmb/laporankelulusan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-file-document-edit-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" LAPORAN KELULUSAN ")])],1)],1):t._e()],1)],1),t.showrightsidebar?a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{staticClass:"teal lighten-5 mb-5"},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],s=(a("ac1f"),a("5319"),a("5530")),r=a("2f62"),o={name:"SPMBLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=a("2877"),c=a("6544"),u=a.n(c),m=a("40dc"),v=a("5bc1"),p=a("8212"),h=a("ce7e"),_=a("132d"),f=a("adda"),b=a("8860"),A=a("da13"),g=a("8270"),S=a("5d23"),C=a("34c3"),w=a("f6c4"),R=a("e449"),P=a("f774"),k=a("2fa4"),E=a("e0c7"),T=a("afd9"),N=a("2a7f"),x=Object(d["a"])(l,i,n,!1,null,null,null);e["a"]=x.exports;u()(x,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:p["a"],VDivider:h["a"],VIcon:_["a"],VImg:f["a"],VList:b["a"],VListItem:A["a"],VListItemAvatar:g["a"],VListItemContent:S["g"],VListItemIcon:C["a"],VListItemSubtitle:S["j"],VListItemTitle:S["k"],VMain:w["a"],VMenu:R["a"],VNavigationDrawer:P["a"],VSpacer:k["a"],VSubheader:E["a"],VSystemBar:T["a"],VToolbarTitle:N["c"]})},e477:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:t.isReportPage}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"subheading grey--text"},[a("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},n=[],s={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=s,o=a("2877"),l=a("6544"),d=a.n(l),c=a("62ad"),u=a("a523"),m=a("132d"),v=a("0fd9"),p=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=p.exports;d()(p,{VCol:c["a"],VContainer:u["a"],VIcon:m["a"],VRow:v["a"]})},e5d6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SPMBLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-calendar-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" PASSING GRADE NILAI UJIAN ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" "+t._s(t.jadwal_ujian.nama_kegiatan)+" - TAHUN PENDAFTARAN "+t._s(t.jadwal_ujian.ta)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.jadwal_ujian.idsmt))+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Berisi informasi passing grade nilai dari sebuah jadwal ujian ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id","sort-by":"id","show-expand":"","disable-pagination":!0,"hide-default-footer":!0,expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR NILAI PASSING GRADE")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.loadprodi(e)}}},[t._v(" GENERATE ")])],1)]},proxy:!0},{key:"item.kjur",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$store.getters["uiadmin/getProdiName"](a.kjur))+" ")]}},{key:"item.nilai",fn:function(e){return[a("v-edit-dialog",{attrs:{"return-value":e.item.nilai,large:""},on:{"update:returnValue":function(a){return t.$set(e.item,"nilai",a)},"update:return-value":function(a){return t.$set(e.item,"nilai",a)},save:function(a){return t.saveItem({id:e.item.id,nilai:e.item.nilai})},cancel:t.cancelItem,open:t.openItem,close:t.closeItem},scopedSlots:t._u([{key:"input",fn:function(){return[a("div",{staticClass:"mt-4 title"},[t._v("Update Nilai")]),a("v-text-field",{attrs:{label:"NILAI PASSING GRADE",rules:t.rule_angka,outlined:"",autofocus:""},model:{value:e.item.nilai,callback:function(a){t.$set(e.item,"nilai",a)},expression:"props.item.nilai"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(e.item.nilai)+" ")])]}},{key:"expanded-item",fn:function(e){var i=e.headers,n=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(n.id)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),r=a("684f"),o=a("e477"),l={name:"PassingGrade",created:function(){this.jadwal_ujian_id=this.$route.params.idjadwalujian,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SPMB",disabled:!1,href:"#"},{text:"JADWAL UJIAN PMB",disabled:!1,href:"/spmb/jadwalujianpmb"},{text:"PASSING GRADE",disabled:!0,href:"#"}],this.initialize()},data:function(){return{jadwal_ujian_id:null,jadwal_ujian:{id:0,nama_kegiatan:"",ta:"",idsmt:""},breadcrumbs:[],dashboard:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"PROGRAM STUDI",value:"kjur",sortable:!0},{text:"NILAI",value:"nilai",sortable:!1,width:100}],search:"",rule_angka:[function(t){return/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/.test(t)||"Isi dengan nilai antara 0.00 s.d 100.00"}]}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/spmb/passinggrade",{jadwal_ujian_id:this.jadwal_ujian_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.datatableLoading=!1,e.jadwal_ujian=a.jadwal_ujian,e.datatable=a.passing_grade})).catch((function(){e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},loadprodi:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/spmb/passinggrade/loadprodi",{jadwal_ujian_id:this.jadwal_ujian_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.initialize()})).catch((function(){e.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,i=e.nilai,this.btnLoading=!0,t.next=4,this.$ajax.post("/spmb/passinggrade/"+a,{_method:"put",id:a,nilai:i},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){n.btnLoading=!1,n.initialize()}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancelItem:function(){},openItem:function(){},closeItem:function(){}},computed:{},components:{SPMBLayout:r["a"],ModuleHeader:o["a"]}},d=l,c=a("2877"),u=a("6544"),m=a.n(u),v=a("0798"),p=a("2bc5"),h=a("8336"),_=a("62ad"),f=a("a523"),b=a("8fea"),A=a("ce7e"),g=a("7679"),S=a("132d"),C=a("0fd9"),w=a("2fa4"),R=a("8654"),P=a("71d9"),k=a("2a7f"),E=Object(c["a"])(d,i,n,!1,null,null,null);e["default"]=E.exports;m()(E,{VAlert:v["a"],VBreadcrumbs:p["a"],VBtn:h["a"],VCol:_["a"],VContainer:f["a"],VDataTable:b["a"],VDivider:A["a"],VEditDialog:g["a"],VIcon:S["a"],VRow:C["a"],VSpacer:w["a"],VTextField:R["a"],VToolbar:P["a"],VToolbarTitle:k["c"]})}}]);