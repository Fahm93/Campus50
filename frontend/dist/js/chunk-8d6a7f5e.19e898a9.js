(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d6a7f5e"],{"952f":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("AkademikLayout",{attrs:{showrightsidebar:!1,temporaryleftsidebar:!0}},[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-monitor-dashboard ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" TRANSKRIP NILAI KURIKULUM ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN PENDAFTARAN "+t._s(t.tahun_pendaftaran)+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman berisi daftar transkrip nilai berdasarkan kurikulum. ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("ProfilMahasiswa",{attrs:{datamhs:t.data_mhs,url:"/akademik/nilai/transkripkurikulum"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-title",[t._v(" DAFTAR NILAI TRANSKRIP "),i("v-spacer"),i("v-btn",{attrs:{color:"primary",fab:"",small:"",loading:t.btnLoading,disabled:t.btnLoading||!t.data_mhs.hasOwnProperty("user_id")},on:{click:function(a){return a.stopPropagation(),t.printpdf(a)}}},[i("v-icon",[t._v("mdi-printer")])],1)],1),i("v-card-text",[i("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.datatable,"item-key":"id","disable-pagination":!0,"hide-default-footer":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([t.datatable.length>0?{key:"body.append",fn:function(){return[i("tr",{staticClass:"grey lighten-4 font-weight-black"},[i("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("JUMLAH")]),i("td"),i("td"),i("td"),i("td",[t._v(t._s(t.totalAM))]),i("td",[t._v(t._s(t.totalSKS))]),i("td",[t._v(t._s(t.totalM))])]),i("tr",{staticClass:"grey lighten-4 font-weight-black"},[i("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("IPK SEMENTARA")]),i("td",[t._v(t._s(t.ipk))]),i("td"),i("td"),i("td"),i("td"),i("td")])]},proxy:!0}:null,{key:"no-data",fn:function(){return[t._v(" Data matakuliah belum tersedia silahkan tambah ")]},proxy:!0}],null,!0)})],1)],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogprintpdf,callback:function(a){t.dialogprintpdf=a},expression:"dialogprintpdf"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Print to PDF")])]),i("v-card-text",[i("v-btn",{attrs:{color:"green",text:"",href:t.$api.url+"/"+t.file_pdf}},[t._v(" Download ")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogprintpdf(a)}}},[t._v("CLOSE")])],1)],1)],1)],1)},s=[],r=(i("96cf"),i("1da1")),n=i("e60c"),o=i("e477"),l=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-card",{attrs:{color:"grey lighten-4"}},[i("v-toolbar",{attrs:{elevation:"2"}},[i("v-toolbar-title",[t._v("PROFIL MAHASISWA")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-icon",{on:{click:function(a){return a.stopPropagation(),t.exit()}}},[t._v(" mdi-close-thick ")])],1),t.datamhs.hasOwnProperty("user_id")?i("v-card-text",[i("v-row",[i("v-col",{attrs:{xs:"12",sm:"12",md:"2"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-img",{attrs:{src:t.$api.url+"/"+t.datamhs.foto}}),i("v-card-title",[t._v("NOMOR HP:")]),i("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nomor_hp)+" ")]),i("v-divider",{staticClass:"mx-4"}),i("v-card-text",[i("v-chip",{attrs:{label:"",outlined:"",color:"info"}},[t._v(t._s(t.datamhs.n_status))])],1)],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"12",md:"10"}},[i("v-row",[i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("USER ID:")]),i("v-card-subtitle",[t._v(" "+t._s(t.datamhs.user_id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("PROGRAM STUDI / KELAS:")]),i("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nama_prodi)+" / "+t._s(t.datamhs.nkelas)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",[i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("NIM / NIRM / NO. FORMULIR:")]),i("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nim)+" / "+t._s(t.datamhs.nirm)+" / "+t._s(t.datamhs.no_formulir)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("TAHUN PENDAFTARAN:")]),i("v-card-subtitle",[t._v(" "+t._s(t.datamhs.tahun)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",[i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("NAMA MAHASISWA:")]),i("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nama_mhs)+" ["+t._s(t.datamhs.jk)+"] ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("CREATED:")]),i("v-card-subtitle",[t._v(" "+t._s(t.$date(t.datamhs.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",[i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("EMAIL:")]),i("v-card-subtitle",[t._v(" "+t._s(t.datamhs.email)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[i("v-card",{staticClass:"mb-2",attrs:{flat:""}},[i("v-card-title",[t._v("UPDATED:")]),i("v-card-subtitle",[t._v(" "+t._s(t.$date(t.datamhs.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1):t._e()],1)},d=[],c={name:"ProfilMahasiswaLama",created:function(){this.initialize()},props:{datamhs:{type:Object,required:!0},url:{type:String,default:null}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(this.datamhs);case 1:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),exit:function(){null!=this.url&&this.$router.push(this.url)}}},m=c,v=i("2877"),u=i("6544"),A=i.n(u),h=i("b0af"),_=i("99d9"),p=i("cc20"),S=i("62ad"),g=i("ce7e"),k=i("132d"),C=i("adda"),E=i("6b53"),f=i("0fd9"),b=i("2fa4"),I=i("71d9"),T=i("2a7f"),L=Object(v["a"])(m,l,d,!1,null,null,null),R=L.exports;A()(L,{VCard:h["a"],VCardSubtitle:_["c"],VCardText:_["d"],VCardTitle:_["e"],VChip:p["a"],VCol:S["a"],VDivider:g["a"],VIcon:k["a"],VImg:C["a"],VResponsive:E["a"],VRow:f["a"],VSpacer:b["a"],VToolbar:I["a"],VToolbarTitle:T["c"]});var M={name:"DulangMahasiswaBaru",created:function(){this.user_id=this.$route.params.user_id,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"NILAI",disabled:!1,href:"#"},{text:"TRANSKRIP KURIKULUM",disabled:!1,href:"/akademik/nilai/transkripkurikulum"},{text:"DETAIL",disabled:!0,href:"#"}];var t=this.$store.getters["uiadmin/getProdiID"];this.prodi_id=t,this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"],this.initialize()},data:function(){return{user_id:null,firstloading:!0,prodi_id:null,nama_prodi:null,tahun_pendaftaran:null,btnLoading:!1,btnLoadingTable:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"NO",value:"no",sortable:!0,width:100},{text:"MATAKULIAH",value:"nmatkul",sortable:!0},{text:"KODE",value:"kmatkul",sortable:!0,width:120},{text:"SEMESTER",value:"semester",sortable:!0,width:120},{text:"KELOMPOK",value:"group_alias",sortable:!0,width:120},{text:"HM",value:"HM",sortable:!1,width:100},{text:"AM",value:"AM",sortable:!1,width:100},{text:"K",value:"sks",sortable:!0,width:100},{text:"M",value:"M",sortable:!1,width:100}],search:"",data_mhs:{},totalSKS:0,totalM:0,totalAM:0,ipk:0,dialogprintpdf:!1,file_pdf:null}},methods:{changeTahunPendaftaran:function(t){this.tahun_pendaftaran=t},changeProdi:function(t){this.prodi_id=t},initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/akademik/nilai/transkripkurikulum/"+this.user_id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;a.data_mhs=i.mahasiswa,a.totalSKS=i.jumlah_sks,a.totalM=i.jumlah_m,a.totalAM=i.jumlah_am,a.ipk=i.ipk,a.datatable=i.nilai_matakuliah,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:this.firstloading=!1;case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},printpdf:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.btnLoading=!0,a.next=3,t.$ajax.get("/akademik/nilai/transkripkurikulum/printpdf/"+t.data_mhs.user_id,{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(a){var i=a.data;t.file_pdf=i.pdf_file,t.dialogprintpdf=!0,t.btnLoading=!1})).catch((function(){t.btnLoading=!1}));case 3:case"end":return a.stop()}}),a)})))()},closedialogprintpdf:function(){var t=this;setTimeout((function(){t.file_pdf=null,t.dialogprintpdf=!1}),300)}},components:{AkademikLayout:n["a"],ModuleHeader:o["a"],ProfilMahasiswa:R}},K=M,N=i("0798"),w=i("2bc5"),x=i("8336"),y=i("a523"),V=i("8fea"),O=i("169a"),P=Object(v["a"])(K,e,s,!1,null,null,null);a["default"]=P.exports;A()(P,{VAlert:N["a"],VBreadcrumbs:w["a"],VBtn:x["a"],VCard:h["a"],VCardActions:_["b"],VCardText:_["d"],VCardTitle:_["e"],VCol:S["a"],VContainer:y["a"],VDataTable:V["a"],VDialog:O["a"],VIcon:k["a"],VRow:f["a"],VSpacer:b["a"]})},e477:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{fluid:t.isReportPage}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("h1",{staticClass:"subheading grey--text"},[i("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},n=r,o=i("2877"),l=i("6544"),d=i.n(l),c=i("62ad"),m=i("a523"),v=i("132d"),u=i("0fd9"),A=Object(o["a"])(n,e,s,!1,null,null,null);a["a"]=A.exports;d()(A,{VCol:c["a"],VContainer:m["a"],VIcon:v["a"],VRow:u["a"]})},e60c:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}}),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{class:this.$store.getters["uiadmin/getTheme"]("V-APP-BAR-NAV-ICON-CSS-CLASS"),on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},e))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[i("v-icon",[t._v("mdi-menu-open")])],1)],1),i("v-navigation-drawer",{class:this.$store.getters["uiadmin/getTheme"]("V-NAVIGATION-DRAWER-CSS-CLASS"),attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")?i("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-CSS-CLASS"),attrs:{to:{path:"/akademik"},link:"",color:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-COLOR")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-monitor-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD AKADEMIK")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN-WALI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-teach")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-MATAKULIAH_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")||t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?i("v-subheader",[t._v("DAFTAR ULANG")]):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mhsbelumpunyanim","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" BELUM PUNYA NIM ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswalama","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MAHASISWA LAMA ")])],1)],1):t._e(),i("v-subheader",[t._v("KEMAHASISWAAN")]),t.CAN_ACCESS("AKADEMIK-KEMAHASISWAAN-DAFTAR-MAHASISWA_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/kemahasiswaan/daftarmahasiswa","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR MAHASISWA ")])],1)],1):t._e(),i("v-subheader",[t._v("PERKULIAHAN")]),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?i("v-list-group",{attrs:{group:"/akademik/perkuliahan/penyelenggaraan","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-home-floor-b")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("PENYELENGGARAAN")])],1)]},proxy:!0}],null,!1,2791626149)},[i("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/penyelenggaraan/daftar",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/penyelenggaraan/tambah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/penyelenggaraan/"+t.paramid+"/dosenpengampu"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DOSEN PENGAMPU ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?i("v-list-group",{attrs:{group:"/akademik/perkuliahan/krs","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-format-columns")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("KRS")])],1)]},proxy:!0}],null,!1,2196385036)},[i("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/krs/daftar",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/krs/tambah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_SHOW")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/detail"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DETAIL KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/tambahmatkul"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?i("v-list-group",{attrs:{group:"/akademik/perkuliahan/pembagiankelas","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-google-classroom")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("PEMBAGIAN KELAS")])],1)]},proxy:!0}],null,!1,3897047730)},[i("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/pembagiankelas/daftar",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/pembagiankelas/tambah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH KELAS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/pembagiankelas/"+t.paramid+"/peserta"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PESERTA ")])],1)],1):t._e()],1)]):t._e(),i("v-subheader",[t._v("NILAI")]),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_BROWSE")&&"puslahta"==t.dashboard?i("v-list-group",{attrs:{group:"/akademik/nilai/matakuliah","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-format-columns")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("ISI NILAI")])],1)]},proxy:!0}],null,!1,927400214)},[i("div",[t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkelasmhs",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PER KELAS MHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkrs",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PER KRS ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-KHS_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/khs"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-TRANSKRIP-KURIKULUM_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/transkripkurikulum"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TRANSKRIP KURIKULUM ")])],1)],1):t._e()],1)],1),t.showrightsidebar?i("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-menu-open")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),i("v-divider"),i("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-filter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],r=(i("b0c0"),i("ac1f"),i("5319"),i("5530")),n=i("2f62"),o={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t},paramid:function(){var t="empty";switch(this.$route.name){case"PerkuliahanPenyelenggaraanDosenPengampu":t=this.$route.params.idpenyelenggaraan;break;case"PerkuliahanKRSDetail":t=this.$route.params.krsid;break;case"PerkuliahanKRSTambahMatkul":t=this.$route.params.krsid;break;case"PerkuliahanPembagianKelasPeserta":t=this.$route.params.kelas_mhs_id;break}return t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=i("2877"),c=i("6544"),m=i.n(c),v=i("40dc"),u=i("5bc1"),A=i("8212"),h=i("ce7e"),_=i("132d"),p=i("adda"),S=i("8860"),g=i("56b0"),k=i("da13"),C=i("8270"),E=i("5d23"),f=i("34c3"),b=i("f6c4"),I=i("e449"),T=i("f774"),L=i("2fa4"),R=i("e0c7"),M=i("afd9"),K=i("2a7f"),N=Object(d["a"])(l,e,s,!1,null,null,null);a["a"]=N.exports;m()(N,{VAppBar:v["a"],VAppBarNavIcon:u["a"],VAvatar:A["a"],VDivider:h["a"],VIcon:_["a"],VImg:p["a"],VList:S["a"],VListGroup:g["a"],VListItem:k["a"],VListItemAvatar:C["a"],VListItemContent:E["g"],VListItemIcon:f["a"],VListItemSubtitle:E["j"],VListItemTitle:E["k"],VMain:b["a"],VMenu:I["a"],VNavigationDrawer:T["a"],VSpacer:L["a"],VSubheader:R["a"],VSystemBar:M["a"],VToolbarTitle:K["c"]})}}]);