(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0653f2d5"],{"724b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AkademikLayout",{scopedSlots:t._u([{key:"filtersidebar",fn:function(){return[a("Filter2",{ref:"filter2",on:{changeTahunAkademik:t.changeTahunAkademik,changeSemesterAkademik:t.changeSemesterAkademik}})]},proxy:!0}])},[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-monitor-dashboard ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" PEMBAGIAN KELAS ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.semester_akademik))+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk melakukan pembentukan kelas yang akan diselenggarakan dan juga dikaitkan dengan penyelenggaraan matakuliah. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","show-expand":"",expanded:t.expanded,"single-expand":!0,"disable-pagination":!0,"hide-default-footer":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR PEMBAGIAN KELAS")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMGBAGIAN-KELAS_STORE")?a("v-btn",{staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:"",to:"/akademik/perkuliahan/pembagiankelas/tambah"}},[a("v-icon",[t._v("mdi-plus")])],1):t._e(),a("v-btn",{staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:""}},[a("v-icon",[t._v("mdi-printer")])],1),a("v-dialog",{attrs:{"max-width":"750px",persistent:""},model:{value:t.dialogfrm,callback:function(e){t.dialogfrm=e},expression:"dialogfrm"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("UBAH DATA KELAS")])]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{items:t.daftar_hari,label:"HARI",rules:t.rule_hari,outlined:""},model:{value:t.formdata.hari,callback:function(e){t.$set(t.formdata,"hari",e)},expression:"formdata.hari"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{label:"JAM MASUK (contoh: 04:00)",outlined:"",rules:t.rule_jam_masuk},model:{value:t.formdata.jam_masuk,callback:function(e){t.$set(t.formdata,"jam_masuk",e)},expression:"formdata.jam_masuk"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{label:"JAM KELUAR (contoh: 06:00)",outlined:"",rules:t.rule_jam_keluar},model:{value:t.formdata.jam_keluar,callback:function(e){t.$set(t.formdata,"jam_keluar",e)},expression:"formdata.jam_keluar"}})],1)],1),a("v-select",{attrs:{items:t.daftar_ruang_kelas,label:"RUANG KELAS",rules:t.rule_ruang_kelas,"item-text":"namaruang","item-value":"id",outlined:""},model:{value:t.formdata.ruang_kelas_id,callback:function(e){t.$set(t.formdata,"ruang_kelas_id",e)},expression:"formdata.ruang_kelas_id"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogfrm(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.nmatkul",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.nmatkul)+" - "+t._s(t.$store.getters["uiadmin/getNamaKelas"](a.idkelas))+" ")]}},{key:"item.jam_masuk",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.jam_masuk)+"-"+t._s(a.jam_keluar)+" ")]}},t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?{key:"item.actions",fn:function(e){var i=e.item;return[a("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.$router.push("/akademik/perkuliahan/pembagiankelas/"+i.id+"/peserta")}}},[a("v-icon",[t._v(" mdi-account-child-outline ")])],1),a("v-btn",{attrs:{small:"",icon:"",loading:t.btnLoadingTable,disabled:t.btnLoadingTable},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},[a("v-icon",[t._v(" mdi-pencil ")])],1),a("v-btn",{attrs:{small:"",icon:"",loading:t.btnLoadingTable,disabled:t.btnLoadingTable},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}},[a("v-icon",[t._v(" mdi-delete ")])],1)]}}:{key:"item.actions",fn:function(){return[t._v(" N.A ")]},proxy:!0},{key:"expanded-item",fn:function(e){var i=e.headers,s=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(s.id)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}],null,!0)})],1)],1)],1)],1)},s=[],n=(a("c975"),a("a434"),a("5530")),r=(a("96cf"),a("1da1")),o=a("e60c"),l=a("e477"),m=a("b602"),d=a("2f62"),c={name:"PerkuliahanPembagianKelas",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"PERKULIAHAN",disabled:!1,href:"#"},{text:"PEMBAGIAN KELAS",disabled:!0,href:"#"}],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"],this.initialize()},data:function(){return{firstloading:!0,tahun_akademik:null,semester_akademik:null,btnLoading:!1,btnLoadingTable:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"KODE",value:"kmatkul",sortable:!0,width:100},{text:"NAMA MATAKULIAH/KELAS",value:"nmatkul",sortable:!0},{text:"NAMA DOSEN",value:"nama_dosen",sortable:!0},{text:"HARI",value:"nama_hari",sortable:!0,width:100},{text:"JAM",value:"jam_masuk",sortable:!0,width:100},{text:"RUANG",value:"namaruang",sortable:!0,width:100},{text:"JUMLAH PESERTA",value:"jumlah_mhs",sortable:!0,width:100},{text:"AKSI",value:"actions",sortable:!1,width:120}],search:"",dialogfrm:!1,form_valid:!0,daftar_ruang_kelas:[],daftar_hari:[{text:"SENIN",value:1},{text:"SELASA",value:2},{text:"RABU",value:3},{text:"KAMIS",value:4},{text:"JUMAT",value:5},{text:"SABTU",value:6}],formdata:{id:"",idkelas:"",hari:"",jam_masuk:"",jam_keluar:"",penyelenggaraan_dosen_id:"",ruang_kelas_id:""},formdefault:{id:"",idkelas:"",hari:"",jam_masuk:"",jam_keluar:"",penyelenggaraan_dosen_id:"",ruang_kelas_id:""},rule_hari:[function(t){return!!t||"Mohon dipilih hari mengajar!!!"}],rule_jam_masuk:[function(t){return!!t||"Mohon diisi jam masuk mengajar!!!"},function(t){return/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(t)||"Format jam masuk mengajar hh:mm, misalnya 15:30"}],rule_jam_keluar:[function(t){return!!t||"Mohon diisi jam keluar mengajar!!!"},function(t){return/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(t)||"Format jam keluar mengajar hh:mm, misalnya 15:00"}],rule_ruang_kelas:[function(t){return!!t||"Mohon dipilih ruang kelas mengajar!!!"}]}},methods:{changeTahunAkademik:function(t){this.tahun_akademik=t},changeSemesterAkademik:function(t){this.semester_akademik=t},initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/akademik/perkuliahan/pembagiankelas",{ta:this.tahun_akademik,semester_akademik:this.semester_akademik},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.datatable=a.pembagiankelas,e.datatableLoading=!1})).catch((function(){e.datatableLoading=!1}));case 3:this.firstloading=!1,this.$refs.filter2.setFirstTimeLoading(this.firstloading);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},editItem:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax.get("/datamaster/ruangankelas",{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(a){var i=a.data;e.daftar_ruang_kelas=i.ruangan,e.formdata=Object.assign({},t),e.dialogfrm=!0}));case 2:case"end":return a.stop()}}),a)})))()},save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/akademik/perkuliahan/pembagiankelas/"+this.formdata.id,{_method:"PUT",hari:this.formdata.hari,jam_masuk:this.formdata.jam_masuk,jam_keluar:this.formdata.jam_keluar,ruang_kelas_id:this.formdata.ruang_kelas_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.closedialogfrm(),e.initialize()})).catch((function(){e.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteItem:function(t){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus pembagian kelas matakuliah ("+t.nmatkul+") ?",{color:"red",width:600,desc:"proses ini membuat mahasiswa tidak memiliki kelas."}).then((function(a){a&&(e.btnLoadingTable=!0,e.$ajax.post("/akademik/perkuliahan/pembagiankelas/"+t.id,{_method:"DELETE"},{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(){var a=e.datatable.indexOf(t);e.datatable.splice(a,1),e.btnLoadingTable=!1})).catch((function(){e.btnLoadingTable=!1})))}))},closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.$refs.frmdata.reset()}),300)}},watch:{tahun_akademik:function(){this.firstloading||this.initialize()},semester_akademik:function(){this.firstloading||this.initialize()}},computed:Object(n["a"])({},Object(d["b"])("auth",{CAN_ACCESS:"can"})),components:{AkademikLayout:o["a"],ModuleHeader:l["a"],Filter2:m["a"]}},u=c,v=a("2877"),A=a("6544"),h=a.n(A),k=a("0798"),_=a("2bc5"),g=a("8336"),S=a("b0af"),f=a("99d9"),p=a("62ad"),E=a("a523"),C=a("8fea"),b=a("169a"),T=a("ce7e"),I=a("4bd4"),L=a("132d"),K=a("0fd9"),R=a("b974"),N=a("2fa4"),M=a("8654"),x=a("71d9"),V=a("2a7f"),w=Object(v["a"])(u,i,s,!1,null,null,null);e["default"]=w.exports;h()(w,{VAlert:k["a"],VBreadcrumbs:_["a"],VBtn:g["a"],VCard:S["a"],VCardActions:f["b"],VCardText:f["d"],VCardTitle:f["e"],VCol:p["a"],VContainer:E["a"],VDataTable:C["a"],VDialog:b["a"],VDivider:T["a"],VForm:I["a"],VIcon:L["a"],VRow:K["a"],VSelect:R["a"],VSpacer:N["a"],VTextField:M["a"],VToolbar:x["a"],VToolbarTitle:V["c"]})},b602:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",[a("v-list-item-content",[a("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN AKADEMIK",outlined:""},model:{value:t.tahun_akademik,callback:function(e){t.tahun_akademik=e},expression:"tahun_akademik"}}),a("v-select",{attrs:{items:t.daftar_semester,"item-text":"text","item-value":"id",label:"SEMESTER",outlined:""},model:{value:t.semester_akademik,callback:function(e){t.semester_akademik=e},expression:"semester_akademik"}})],1)],1)},s=[],n={name:"FilterMode6",created:function(){this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.daftar_semester=this.$store.getters["uiadmin/getDaftarSemester"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"]},data:function(){return{firstloading:!0,daftar_ta:[],tahun_akademik:null,daftar_semester:[],semester_akademik:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_akademik:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunAkademik",t),this.$emit("changeTahunAkademik",t))},semester_akademik:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateSemesterAkademik",t),this.$emit("changeSemesterAkademik",t))}}},r=n,o=a("2877"),l=a("6544"),m=a.n(l),d=a("da13"),c=a("5d23"),u=a("b974"),v=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=v.exports;m()(v,{VListItem:d["a"],VListItemContent:c["g"],VSelect:u["a"]})},e477:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:t.isReportPage}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"subheading grey--text"},[a("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=n,o=a("2877"),l=a("6544"),m=a.n(l),d=a("62ad"),c=a("a523"),u=a("132d"),v=a("0fd9"),A=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=A.exports;m()(A,{VCol:d["a"],VContainer:c["a"],VIcon:u["a"],VRow:v["a"]})},e60c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}}),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{class:this.$store.getters["uiadmin/getTheme"]("V-APP-BAR-NAV-ICON-CSS-CLASS"),on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{class:this.$store.getters["uiadmin/getTheme"]("V-NAVIGATION-DRAWER-CSS-CLASS"),attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")?a("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-CSS-CLASS"),attrs:{to:{path:"/akademik"},link:"",color:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-COLOR")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD AKADEMIK")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN-WALI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-teach")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-MATAKULIAH_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")||t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?a("v-subheader",[t._v("DAFTAR ULANG")]):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mhsbelumpunyanim","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BELUM PUNYA NIM ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswalama","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MAHASISWA LAMA ")])],1)],1):t._e(),a("v-subheader",[t._v("KEMAHASISWAAN")]),t.CAN_ACCESS("AKADEMIK-KEMAHASISWAAN-DAFTAR-MAHASISWA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/akademik/kemahasiswaan/daftarmahasiswa","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR MAHASISWA ")])],1)],1):t._e(),a("v-subheader",[t._v("PERKULIAHAN")]),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?a("v-list-group",{attrs:{group:"/akademik/perkuliahan/penyelenggaraan","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-home-floor-b")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("PENYELENGGARAAN")])],1)]},proxy:!0}],null,!1,2791626149)},[a("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/penyelenggaraan/daftar",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/penyelenggaraan/tambah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/penyelenggaraan/"+t.paramid+"/dosenpengampu"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN PENGAMPU ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?a("v-list-group",{attrs:{group:"/akademik/perkuliahan/krs","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-format-columns")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("KRS")])],1)]},proxy:!0}],null,!1,2196385036)},[a("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/krs/daftar",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/krs/tambah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_SHOW")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/detail"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DETAIL KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/tambahmatkul"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?a("v-list-group",{attrs:{group:"/akademik/perkuliahan/pembagiankelas","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-google-classroom")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("PEMBAGIAN KELAS")])],1)]},proxy:!0}],null,!1,3897047730)},[a("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/pembagiankelas/daftar",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/pembagiankelas/tambah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TAMBAH KELAS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/pembagiankelas/"+t.paramid+"/peserta"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PESERTA ")])],1)],1):t._e()],1)]):t._e(),a("v-subheader",[t._v("NILAI")]),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_BROWSE")&&"puslahta"==t.dashboard?a("v-list-group",{attrs:{group:"/akademik/nilai/matakuliah","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-format-columns")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("ISI NILAI")])],1)]},proxy:!0}],null,!1,927400214)},[a("div",[t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkelasmhs",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PER KELAS MHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkrs",color:"white"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PER KRS ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-KHS_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/khs"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-TRANSKRIP-KURIKULUM_BROWSE")?a("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/transkripkurikulum"}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TRANSKRIP KURIKULUM ")])],1)],1):t._e()],1)],1),t.showrightsidebar?a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],n=(a("b0c0"),a("ac1f"),a("5319"),a("5530")),r=a("2f62"),o={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},paramid:function(){var t="empty";switch(this.$route.name){case"PerkuliahanPenyelenggaraanDosenPengampu":t=this.$route.params.idpenyelenggaraan;break;case"PerkuliahanKRSDetail":t=this.$route.params.krsid;break;case"PerkuliahanKRSTambahMatkul":t=this.$route.params.krsid;break;case"PerkuliahanPembagianKelasPeserta":t=this.$route.params.kelas_mhs_id;break}return t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,m=a("2877"),d=a("6544"),c=a.n(d),u=a("40dc"),v=a("5bc1"),A=a("8212"),h=a("ce7e"),k=a("132d"),_=a("adda"),g=a("8860"),S=a("56b0"),f=a("da13"),p=a("8270"),E=a("5d23"),C=a("34c3"),b=a("f6c4"),T=a("e449"),I=a("f774"),L=a("2fa4"),K=a("e0c7"),R=a("afd9"),N=a("2a7f"),M=Object(m["a"])(l,i,s,!1,null,null,null);e["a"]=M.exports;c()(M,{VAppBar:u["a"],VAppBarNavIcon:v["a"],VAvatar:A["a"],VDivider:h["a"],VIcon:k["a"],VImg:_["a"],VList:g["a"],VListGroup:S["a"],VListItem:f["a"],VListItemAvatar:p["a"],VListItemContent:E["g"],VListItemIcon:C["a"],VListItemSubtitle:E["j"],VListItemTitle:E["k"],VMain:b["a"],VMenu:T["a"],VNavigationDrawer:I["a"],VSpacer:L["a"],VSubheader:K["a"],VSystemBar:R["a"],VToolbarTitle:N["c"]})}}]);