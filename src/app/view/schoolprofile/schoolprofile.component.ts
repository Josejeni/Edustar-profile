import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';

@Component({
  selector: 'app-schoolprofile',
  templateUrl: './schoolprofile.component.html',
  styleUrls: ['./schoolprofile.component.scss']
})
export class SchoolprofileComponent implements OnInit {

  generalForm !:FormGroup
  id:any
  data:any
  step=0;

  constructor(private fb:FormBuilder,private subservice:SubserviceService,private router:Router,private http:HttpClient,private activate:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id=this.activate.snapshot.params['id']
    // console.log(this.id);

    this.generalForm=this.fb.group({
      sname:[''],   
      post:['',Validators.required],
      district:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      pno:['',Validators.required],
      url:['',Validators.required],
      email:['',Validators.required],
      pcode:['',Validators.required],
      slocation:['',Validators.required],
      need:['',Validators.required],
      ayear:['',Validators.required],
      year:['',Validators.required],
      slevel:['',Validators.required],
      medium:['',Validators.required],
      nature:['',Validators.required],
      tstaff:['',Validators.required],
      gender:['',Validators.required],
      girls:['',Validators.required],
      boys:['',Validators.required],
      students:['',Validators.required],
      nstaff:['',Validators.required],
      cname:['',Validators.required],
      cpno:['',Validators.required],
      pname:['',Validators.required],
      pemail:['',Validators.required],
      ppno:['',Validators.required],
      opno:['',Validators.required],
      institute_govt:['',Validators.required],
      board_affiliated:['',Validators.required],
      affiliation_no:['',Validators.required],
      affiliation_year:['',Validators.required],
      affiliation_condition:['',Validators.required],
      affiliation_cons:['',Validators.required],
      status_certificate:['',Validators.required],
      hindhu:['',Validators.required],
      cristian:['',Validators.required],
      islam:['',Validators.required],
      others:['',Validators.required],
      non_believers:['',Validators.required],
      fire_certificate:['',Validators.required],
      sanitation_certificate:['',Validators.required],
      building_certificate:['',Validators.required],
      school_owned:['',Validators.required],
      name_trust:['',Validators.required],
      registered:['',Validators.required],
      under_act:['',Validators.required],
      registration_year:['',Validators.required],
      registration_no:['',Validators.required],
      period_validity:['',Validators.required],
      name_chairman:['',Validators.required],
      designation:['',Validators.required],
      address_chairman:['',Validators.required],
      pno_chairman:['',Validators.required],
      email_chairman:['',Validators.required],
      governing:['',Validators.required],
      members:['',Validators.required],
      tenure:['',Validators.required],
      epcc:['',Validators.required],
      members_epcc:['',Validators.required],
      epcc_tenure:['',Validators.required],
      pt_executive:['',Validators.required],
      pt_members:['',Validators.required],
      pt_tenure:['',Validators.required],
      st_councill:['',Validators.required],
      st_members:['',Validators.required],
      st_tenure:['',Validators.required],
      general_grievance:['',Validators.required],
      sm_committee:['',Validators.required],
      cm_committee:['',Validators.required],
      cm_members:['',Validators.required],
      cm_tenure:['',Validators.required],
      school_building:['',Validators.required],
      cam_area:['',Validators.required],
      pas:['',Validators.required],
      built_area:['',Validators.required],
      play_area:['',Validators.required],
      no_building:['',Validators.required],
      provision:['',Validators.required],
      no_staircases:['',Validators.required],
      no_lift:['',Validators.required],
      class_rooms:['',Validators.required],
      srooms:['',Validators.required],
      plab:['',Validators.required],
      clab:['',Validators.required],
      blab:['',Validators.required],
      mlab:['',Validators.required],
      comlab:['',Validators.required],
      llab:['',Validators.required],
      hslab:['',Validators.required],
      library:['',Validators.required],
      auditorium:['',Validators.required],
      counroom:['',Validators.required],
      parlor:['',Validators.required],
      proom:['',Validators.required],
      sick_room:['',Validators.required],
      canteen:['',Validators.required],
      secroom:['',Validators.required],
      oroom:['',Validators.required],
      stoilet:['',Validators.required],
      std_toilet:['',Validators.required],
      rooms:['',Validators.required],
      spcl_stud:['',Validators.required],
      wall:['',Validators.required],
      if_wall:['',Validators.required],
      cctv:['',Validators.required],
      ds:['',Validators.required],
      no_camera:['',Validators.required],
      guard:['',Validators.required],
      no_guard:['',Validators.required],
      fguard:['',Validators.required],
      no_fguard:['',Validators.required],
      water:['',Validators.required],
      drainage:['',Validators.required],
      mmeals:['',Validators.required],
      no_buses:['',Validators.required],
      gps:['',Validators.required],
      nola:['',Validators.required],
      first_aid:['',Validators.required],
      no_water:['',Validators.required],
      no_sbus:['',Validators.required],
      free_tran:['',Validators.required],
      prin_permale:['',Validators.required],
      prin_perfemale:['',Validators.required],
      prin_temmale:['',Validators.required],
      prin_temfemale:['',Validators.required],
    
    
      vp_permale:['',Validators.required],
      vp_perfemale:['',Validators.required],
      vp_temmale:['',Validators.required],
      vp_temfemale:['',Validators.required],
       
      pg_permale:['',Validators.required],
      pg_perfemale:['',Validators.required],
      pg_temmale:['',Validators.required],
      pg_temfemale:['',Validators.required],
     
      tg_permale:['',Validators.required],
      tg_perfemale:['',Validators.required],
      tg_temmale:['',Validators.required],
      tg_temfemale:['',Validators.required],
      
      ut_permale:['',Validators.required],
      ut_perfemale:['',Validators.required],
      ut_temmale:['',Validators.required],
      ut_temfemale:['',Validators.required],
    
      prt_permale:['',Validators.required],
      prt_perfemale:['',Validators.required],
      prt_temmale:['',Validators.required],
      prt_temfemale:['',Validators.required],
      
      nt_permale:['',Validators.required],
      nt_perfemale:['',Validators.required],
      nt_temmale:['',Validators.required],
      nt_temfemale:['',Validators.required],
     
      
      lib_permale:['',Validators.required],
      lib_perfemale:[''],
      lib_temmale:[''],
      lib_temfemale:[''],
     
      art_permale:[''],
      art_perfemale:[''],
      art_temmale:[''],
      art_temfemale:[''],
     
      coun_permale:[''],
      coun_perfemale:[''],
      coun_temmale:[''],
      coun_temfemale:[''],
      
      comlit_permale:[''],
      comlit_perfemale:[''],
      comlit_temmale:[''],
      comlit_temfemale:[''],
     
      faithmin_permale:[''],
      faithmin_perfemale:[''],
      faithmin_temmale:[''],
      faithmin_temfemale:[''],
     
      nurse_permale:[''],
      nurse_perfemale:[''],
      nurse_temmale:[''],
      nurse_temfemale:[''],
    
      pt_permale:[''],
      pt_perfemale:[''],
      pt_temmale:[''],
      pt_temfemale:[''],
    
     
      om_per:[''],
      om_tem:[''],
      om_part:[''],
  
      oa_per:[''],
      oa_tem:[''],
      oa_part:[''],
 
      clerk_per:[''],
      clerk_tem:[''],
      clerk_part:[''],
     
      lab_per:[''],
      lab_tem:[''],
      lab_part:[''],
     
      acc_per:[''],
      acc_tem:[''],
      acc_part:[''],
     
      peon_per:[''],
      peon_tem:[''],
      peon_part:[''],
     
      other_per:[''],
      other_tem:[''],
      other_part:[''],
      no_curricular_carried:[''],
      no_groups:[''],
      no_community:[''],
  
      last_school:[''],
      last_zonal:[''],
      last_district:[''],
      last_national:[''],
      last_international:[''],
  
      com_school:[''],
      com_zonal:[''],
      com_district:[''],
      com_national:[''],
      com_international:[''],
  
      sclpro_school:[''],
      sclpro_zonal:[''],
      sclpro_national:[''],
     
      last_state:[''],
      com_state:[''],
      sclpro_state:[''],
      sclpro_district:[''],
      sclpro_international:[''],
      
      year_begin:[''],
      year_end:[''],
      workday_21_22:[''],
      workday_20_21:[''],
      workday_19_20:[''],
      hours_21_22:[''],
      hours_20_21:[''],
      hours_19_20:[''],
      instructional_hours_21_22:[''],
      instructional_hours_20_21:[''],
      instructional_hours_19_20:[''],
      non_instructional_hours_21_22:[''],
      non_instructional_hours_20_21:[''],
      non_instructional_hours_19_20:[''],
      holidays_21_22:[''],
      holidays_20_21:[''],
      holidays_19_20:[''],
      
      sub_week:[''],
      moral_week:[''],
      duration_teaching:[''],
      no_clubs:[''],
      summer_from:[''],
      summer_to:[''],
      winter_from:[''],
      winter_to:[''],
      shifts:['']

      

    })
    this.subservice.gen().subscribe(arg=>{
      this.data=arg;
      console.log(this.data);
      
      this.loadData()
    })
    this.next()
  }
  loadData(){
    this.generalForm=this.fb.group({
    sname:[this.data.sname],   
    post:[this.data.post],
    district:[this.data.district],
    state:[this.data.state],
    city:[this.data.city],
    pno:[this.data.pno],
    url:[this.data.url],
    email:[this.data.email],
    pcode:[this.data.pcode],
    slocation:[this.data.slocation],
    need:[this.data.need],
    ayear:[this.data.ayear],
    year:[this.data.year],
    slevel:[this.data.slevel],
    medium:[this.data.medium],
    nature:[this.data.nature],
    tstaff:[this.data.tstaff],
    gender:[this.data.gender],
    girls:[this.data.girls],
    boys:[this.data.boys],
    students:[this.data.students],
    nstaff:[this.data.nstaff],
    cname:[this.data.cname],
    cpno:[this.data.cpno],
    pname:[this.data.pname],
    pemail:[this.data.pemail],
    ppno:[this.data.ppno],
    opno:[this.data.opno],
    institute_govt:[this.data.institute_govt],
    board_affiliated:[this.data.board_affiliated],
    affiliation_no:[this.data.affiliation_no],
    affiliation_year:[this.data.affiliation_year],
    affiliation_condition:[this.data.affiliation_condition],
    affiliation_cons:[this.data.affiliation_cons],
    status_certificate:[this.data.status_certificate],
    hindhu:[this.data.hindhu],
    cristian:[this.data.cristian],
    islam:[this.data.islam],
    others:[this.data.others],
    non_believers:[this.data.non_believers],
    fire_certificate:[this.data.fire_certificate],
    sanitation_certificate:[this.data.sanitation_certificate],
    building_certificate:[this.data.building_certificate],
    school_owned:[this.data.school_owned],
    name_trust:[this.data.name_trust],
    registered:[this.data.registered],
    under_act:[this.data.under_act],
    registration_year:[this.data.registration_year],
    registration_no:[this.data.registration_no],
    period_validity:[this.data.period_validity],
    name_chairman:[this.data.name_chairman],
    designation:[this.data.designation],
    address_chairman:[this.data.address_chairman],
    pno_chairman:[this.data.pno_chairman],
    email_chairman:[this.data.email_chairman],
    governing:[this.data.governing],
    members:[this.data.members],
    tenure:[this.data.tenure],
    epcc:[this.data.epcc],
    members_epcc:[this.data.members_epcc],
    epcc_tenure:[this.data.epcc_tenure],
    pt_executive:[this.data.pt_executive],
    pt_members:[this.data.pt_members],
    pt_tenure:[this.data.pt_tenure],
    st_councill:[this.data.st_councill],
    st_members:[this.data.st_members],
    st_tenure:[this.data.st_tenure],
    general_grievance:[this.data.general_grievance],
    sm_committee:[this.data.sm_committee],
    cm_committee:[this.data.cm_committee],
    cm_members:[this.data.cm_members],
    cm_tenure:[this.data.cm_tenure ],      
    prin_permale:[this.data.prin_permale],
    prin_perfemale:[this.data.prin_perfemale],
    prin_temmale:[this.data.prin_temmale],
    prin_temfemale:[this.data.prin_temfemale],
  
    vp_permale:[this.data.vp_permale],
    vp_perfemale:[this.data.vp_perfemale],
    vp_temmale:[this.data.vp_temmale],
    vp_temfemale:[this.data.vp_temfemale],

    pg_permale:[this.data.pg_permale],
    pg_perfemale:[this.data.pg_perfemale],
    pg_temmale:[this.data.pg_temmale],
    pg_temfemale:[this.data.pg_temmale],
    
    tg_permale:[this.data.tg_permale],
    tg_perfemale:[this.data.tg_perfemale],
    tg_temmale:[this.data.tg_temmale],
    tg_temfemale:[this.data.tg_temfemale],
    
    ut_permale:[this.data.ut_permale],
    ut_perfemale:[this.data.ut_perfemale],
    ut_temmale:[this.data.ut_temmale],
    ut_temfemale:[this.data.ut_temfemale],
    
    prt_permale:[this.data.prt_permale],
    prt_perfemale:[this.data.prt_perfemale],
    prt_temmale:[this.data.prt_temmaler],
    prt_temfemale:[this.data.prt_temfemale],
    
    nt_permale:[this.data.nt_permale],
    nt_perfemale:[this.data.nt_perfemale],
    nt_temmale:[this.data.nt_temmale],
    nt_temfemale:[this.data.nt_temfemale],
   
    lib_permale:[this.data.lib_permale],
    lib_perfemale:[this.data.lib_perfemale],
    lib_temmale:[this.data.lib_temmale],
    lib_temfemale:[this.data.lib_temfemale],
    
    art_permale:[this.data.art_permale],
    art_perfemale:[this.data.art_perfemale],
    art_temmale:[this.data.art_temmale],
    art_temfemale:[this.data.art_temfemale],
    
    coun_permale:[this.data.coun_permale],
    coun_perfemale:[this.data.coun_permale],
    coun_temmale:[this.data.coun_temmale],
    coun_temfemale:[this.data.coun_temfemale],
    
    comlit_permale:[this.data.comlit_permale],
    comlit_perfemale:[this.data.comlit_perfemale],
    comlit_temmale:[this.data.comlit_temmale],
    comlit_temfemale:[this.data.comlit_temfemale],
    
    faithmin_permale:[this.data.faithmin_permale],
    faithmin_perfemale:[this.data.faithmin_perfemale],
    faithmin_temmale:[this.data.faithmin_temfemale],
    faithmin_temfemale:[this.data.faithmin_temfemale],
    
    nurse_permale:[this.data.nurse_permale],
    nurse_perfemale:[this.data.nurse_perfemale],
    nurse_temmale:[this.data.nurse_temfemale],
    nurse_temfemale:[this.data.nurse_temfemale],
    
    pt_permale:[this.data.pt_permale],
    pt_perfemale:[this.data.pt_perfemale],
    pt_temmale:[this.data.pt_temmale],
    pt_temfemale:[this.data.pt_temfemale],
    

    om_per:[this.data.om_per],
    om_tem:[this.data.om_tem],
    om_part:[this.data.om_part],
   
    oa_per:[this.data.oa_part],
    oa_tem:[this.data.oa_tem],
    oa_part:[this.data.oa_part],
    
    clerk_per:[this.data.clerk_per],
    clerk_tem:[this.data.clerk_tem],
    clerk_part:[this.data.clerk_part],
   
    lab_per:[this.data.lab_per],
    lab_tem:[this.data.lab_tem],
    lab_part:[this.data.lab_part],
    
    acc_per:[this.data.acc_per],
    acc_tem:[this.data.acc_tem],
    acc_part:[this.data.acc_part],
    
    peon_per:[this.data.peon_per],
    peon_tem:[this.data.peon_tem],
    peon_part:[this.data.peon_part],
   
    other_per:[this.data.other_per],
    other_tem:[this.data.other_tem],
    other_part:[this.data.other_part],
  
    school_building:[this.data.school_building],
    cam_area:[this.data.cam_area],
    pas:[this.data.pas],
    built_area:[this.data.built_area],
    play_area:[this.data.play_area],
    no_building:[this.data.no_building],
    provision:[this.data.provision],
    no_staircases:[this.data.no_staircases],
    no_lift:[this.data.no_lift],
    class_rooms:[this.data.class_rooms],
    srooms:[this.data.srooms],
    plab:[this.data.plab],
    clab:[this.data.clab],
    blab:[this.data.blab],
    mlab:[this.data.mlab],
    comlab:[this.data.comlab],
    llab:[this.data.llab],
    hslab:[this.data.hslab],
    library:[this.data.library],
    auditorium:[this.data.auditorium],
    counroom:[this.data.counroom],
    parlor:[this.data.parlor],
    proom:[this.data.proom],
    sick_room:[this.data.sick_room],
    canteen:[this.data.canteen],
    secroom:[this.data.secroom ],
    oroom:[this.data.oroom],
    stoilet:[this.data.stoilet],
    std_toilet:[this.data.std_toilet],
    rooms:[this.data.rooms],
    spcl_stud:[this.data.spcl_stud],
    wall:[this.data.wall],
    if_wall:[this.data.if_wall],
    cctv:[this.data.cctv],
    ds:[this.data.ds],
    no_camera:[this.data.no_camera],
    guard:[this.data.guard],
    no_guard:[this.data.no_guard],
    fguard:[this.data.fguard],
    no_fguard:[this.data.no_fguard],
    water:[this.data.water],
    drainage:[this.data.drainage],
    mmeals:[this.data.mmeals],
    no_buses:[this.data.no_buses],
    gps:[this.data.gps],
    nola:[this.data.nola],
    first_aid:[this.data.first_aid],
    no_water:[this.data.no_water],
    no_sbus:[this.data.no_sbus],
    free_tran:[this.data.free_tran],
    no_curricular_carried:[this.data.no_curricular_carried],
    no_groups:[this.data.no_groups],
    no_community:[this.data.no_community],
    last_school:[this.data.last_school],
    last_zonal:[this.data.last_zonal],
    last_district:[this.data.last_district],
    last_national:[this.data.last_national],
    last_international:[this.data.last_international],

    com_school:[this.data.com_school],
    com_zonal:[this.data.com_zonal],
    com_district:[this.data.com_district],
    com_national:[this.data.com_national],
    com_international:[this.data.com_international],

    sclpro_school:[this.data.sclpro_school],
    sclpro_zonal:[this.data.sclpro_zonal],
    sclpro_national:[this.data.sclpro_national],
    sclpro_state:[this.data.sclpro_state],
    sclpro_international:[this.data.sclpro_international],
    sclpro_district:[this.data.sclpro_district],
    last_state:[this.data.last_state],
    com_state:[this.data.com_state],

    year_begin:[this.data.year_begin],
    year_end:[this.data.year_end],
    workday_21_22:[this.data.workday_21_22],
    workday_20_21:[this.data.workday_20_21],
    workday_19_20:[this.data.workday_19_20],
    hours_21_22:[this.data.hours_21_22],
    hours_20_21:[this.data.hours_20_21],
    hours_19_20:[this.data.hours_19_20],
    instructional_hours_21_22:[this.data.instructional_hours_21_22],
    instructional_hours_20_21:[this.data.instructional_hours_20_21],
    instructional_hours_19_20:[this.data.instructional_hours_19_20],
    non_instructional_hours_21_22:[this.data.non_instructional_hours_21_22],
    non_instructional_hours_20_21:[this.data.non_instructional_hours_20_21],
    non_instructional_hours_19_20:[this.data.non_instructional_hours_19_20],
    holidays_21_22:[this.data.holidays_21_22],
    holidays_20_21:[this.data.holidays_20_21],
    holidays_19_20:[this.data.holidays_19_20],
    
    sub_week:[this.data.sub_week],
    moral_week:[this.data.moral_week],
    duration_teaching:[this.data.duration_teaching],
    no_clubs:[this.data.no_clubs],
    summer_from:[this.data.summer_from],
    summer_to:[this.data.summer_to],
    winter_from:[this.data.winter_from],
    winter_to:[this.data.winter_to],
    shifts:[this.data.shifts]
   

    })}
 onSubmit(){
  console.log(this.generalForm.value);
  this.subservice.general(this.generalForm.value).subscribe(arg =>{
    console.log(arg) 
    this.data=arg
    this.router.navigate(['/home']);
    
   }) 
  
 }
 next(){
  this.step+=1
 }
previous(){
  this.step-=1
}
call(){
  this.router.navigate(['/home',{"id":this.id}]);
}
}
// this.http.post(" http://127.0.0.1:8000/gender",this.generalForm.value).subscribe(arg=>{
//       this.data=arg
//       console.log(this.data)
//       return this.router.navigate(['/login']);
//   })
// }

