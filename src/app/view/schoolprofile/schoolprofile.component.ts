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
  page:any = "schoolprofilepage"
  constructor(private fb:FormBuilder,private subservice:SubserviceService,private router:Router,private http:HttpClient,private activate:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id=this.activate.snapshot.params['id']
    // console.log(this.id);

    this.generalForm=this.fb.group({

    schoolprofilepage1:this.fb.group({

      schoolName:['',Validators.required],   
      post:['',Validators.required],
      district:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      schoolPhoneNumber:['',Validators.required],
      schoolUrl:['',Validators.required],
      schoolEmail:['',Validators.required],
      pinCode:['',Validators.required],
      schoolLocation:['',Validators.required],
      specialChild:['',Validators.required],
      academicYear:['',Validators.required],
    }),
    schoolprofilepage2:this.fb.group({
        estabilshedYear:['',Validators.required],
        schoolLevel:['',Validators.required],
        medium:['',Validators.required],
        natureAffiliation:['',Validators.required],
        teachingStaff:['',Validators.required],
        gender:['',Validators.required],
        girls:['',Validators.required],
        boys:['',Validators.required],
        students:['',Validators.required],
        nonTeachingStaff:['',Validators.required],
        correspondentName:['',Validators.required],
        correspondentPhoneNumber:['',Validators.required],
      }),

    schoolprofilepage3:this.fb.group({
        principalName:['',Validators.required],
        principalEmail:['',Validators.required],
        principalPhoneNumber:['',Validators.required],
        officialPhoneNumber:['',Validators.required],
      }),
      
      schoolprofilepage4:this.fb.group({
        schoolprofilepage4:this.fb.group({}),
        governmentRecognized:['',Validators.required],
        affiliatedBoard:['',Validators.required],
        affiliationNumber:['',Validators.required],
        affiliationYear:['',Validators.required],
        affiliationCondition:['',Validators.required],
        stateAffiliationCondition:['',Validators.required],
        statusCertificate:['',Validators.required],
        hindhu:['',Validators.required],
        cristian:['',Validators.required],
        islam:['',Validators.required],
        others:['',Validators.required],
        nonBelievers:['',Validators.required],
        fireCertificate:['',Validators.required],
        sanitationCertificate:['',Validators.required],
        buildingCertificate:['',Validators.required],
      }),

      schoolprofilepage5:this.fb.group({
        schoolOwnedBy:['',Validators.required],
        trustName:['',Validators.required],
        trustRegistered:['',Validators.required],
        underAct:['',Validators.required],
        registrationYear:['',Validators.required],
        registrationNumber:['',Validators.required],
        registrationValidity:['',Validators.required],
        chairmanName:['',Validators.required],
        designation:['',Validators.required],
        chairmainAddress:['',Validators.required],
        chairmanPhoneNumber:['',Validators.required],
        chairmanEmail:['',Validators.required],
      }),

      schoolprofilepage6:this.fb.group({
        governingBody:['',Validators.required],
        trustMember:['',Validators.required],
        tenureMember:['',Validators.required],
        epcc:['',Validators.required],
        epccMember:['',Validators.required],
        epccTenureMember:['',Validators.required],
        parentTeacherAssociation:['',Validators.required],
        parentTeacherAssociationMember:['',Validators.required],
        parentTeacherTenureMember:['',Validators.required],
      }),

      schoolprofilepage7:this.fb.group({
        studentCouncil:['',Validators.required],
        studentCouncilMembers:['',Validators.required],
        studentCouncilTenureMember:['',Validators.required],
        generalGrievance:['',Validators.required],
        schoolCommittee:['',Validators.required],
        committeeCondition:['',Validators.required],
        committeeConditionMembers:['',Validators.required],
        committeeTenureMember:['',Validators.required],
      }),

      schoolprofilepage8:this.fb.group({
        schoolBuilding:['',Validators.required],
        campusArea:['',Validators.required],
        
        builtArea:['',Validators.required],
        playArea:['',Validators.required],
        numberOfBuilding:['',Validators.required],
        provisions:['',Validators.required],
        staircasesNumber:['',Validators.required],
        liftNumber:['',Validators.required],
      }),

      schoolprofilepage9:this.fb.group({
        classRooms:['',Validators.required],
        staffrooms:['',Validators.required],
        physicsLab:['',Validators.required],
        chemistrylab:['',Validators.required],
        biologylab:['',Validators.required],
        mathslab:['',Validators.required],
        computerscienceLab:['',Validators.required],
        languageLab:['',Validators.required],
        homescienceLab:['',Validators.required],
        library:['',Validators.required],
        auditorium:['',Validators.required],
        counselorroom:['',Validators.required],
        parlor:['',Validators.required],
        chapel:['',Validators.required],
        sickroom:['',Validators.required],
        canteen:['',Validators.required],
        securityroom:['',Validators.required],
        otherroom:['',Validators.required],
        staffToilet:['',Validators.required],
        studenttoilet:['',Validators.required],
        rooms:['',Validators.required],
        specialStudent:['',Validators.required],
      }),

      schoolprofilepage10:this.fb.group({
        wall:['',Validators.required],
        wallCondition:['',Validators.required],
        cctv:['',Validators.required],
        datasaved:['',Validators.required],
        cameraCount:['',Validators.required],
        maleguard:['',Validators.required],
        maleGuardCount:['',Validators.required],
        femaleguard:['',Validators.required],
        femaleguardCount:['',Validators.required],
        water:['',Validators.required],
        drainage:['',Validators.required],
      }),

      schoolprofilepage11:this.fb.group({
        middayMeal:['',Validators.required],
        ownedBuses:['',Validators.required],
        gps:['',Validators.required],
        ladyAttendance:['',Validators.required],
        firstaid:['',Validators.required],
        drinkingWater:['',Validators.required],
        subcontracted:['',Validators.required],
        buspass:['',Validators.required],
        freeTransport:['',Validators.required],
      }),

      schoolprofilepage12:this.fb.group({
        malePrincipal:['',Validators.required],
        femalePrincipal:['',Validators.required],
        temporaryMalePrincipal:['',Validators.required],
        temporaryFemalePrincipal:['',Validators.required],
      
      
        maleViceprincipal:['',Validators.required],
        femaleViceprincipal:['',Validators.required],
        temporaryMaleViceprincipal:['',Validators.required],
        temporaryFemaleViceprincipal:['',Validators.required],
         
        postgraduateTeachers:['',Validators.required],
        postgraduateFemaleTeachers:['',Validators.required],
        temporaypgmaleStaff:['',Validators.required],
        temporaypgFemaleStaff:['',Validators.required],
       
        tgMaleStaff:['',Validators.required],
        tgFemaleStaff:['',Validators.required],
        temporarytgFemaleStaff:['',Validators.required],
        temporarytgMaleStaff:['',Validators.required],
        
        untrainMalestaff:['',Validators.required],
        untrainFemalestaff:['',Validators.required],
        untrainedTemporaryMale:['',Validators.required],
        untrainedTemporaryFemale:['',Validators.required],
      
        primaryMaleStaff:['',Validators.required],
        primaryFemaleStaff:['',Validators.required],
        temporaryPrimarymale:['',Validators.required],
        temporaryPrimaryfemale:['',Validators.required],
        
        nurseryMaleStaff:['',Validators.required],
        nurseryFemaleStaff:['',Validators.required],
        ntTemporaryMale:['',Validators.required],
        ntTemporaryFemale:['',Validators.required],
       
        
        MaleLibraian:['',Validators.required],
        FemaleLibraian:['',Validators.required],
        temporaryMaleLibrarian:[''],
        temporaryFemaleLibrarian:[''],
       
        artMaleStaff:[''],
        artFemaleStaff:[''],
        artTemporaryMalestaff:[''],
        artTemporaryFemalestaff:[''],
       
        maleCounseller:[''],
        femaleCounseller:[''],
        temporaryMaleCounseller:[''],
        temporaryFemaleCounseller:[''],
        
        MaleComputerLiteracy:[''],
        FemaleComputerLiteracy:[''],
        temporaryMaleComputerLiteracy:[''],
        temporaryFemaleComputerLiteracy:[''],
       
        MaleFaithminister:[''],
        FemaleFaithminister:[''],
        temporaryMaleFaithminister:[''],
        temporaryFemaleFaithminister:[''],
       
        maleNurse:[''],
        femaleNurse:[''],
        temporaryMalenurse:[''],
        temporaryFemalenurse:[''],
      
        malePtTeacher:[''],
        femalePtTeacher:[''],
        temporaryMalept:[''],
        temporaryFemalept:[''],
      }),

      schoolprofilepage13:this.fb.group({
        permanentofficeManager:[''],
        temporaryofficeManager:[''],
        partimeofficeManager:[''],
    
        permanentOfficialAssitent:[''],
        temporaryOfficialAssitent:[''],
        partimeOfficialAssitent:[''],
   
        permanentClerk:[''],
        temporaryClerk:[''],
        partimeClerk:[''],
       
        permanentLabAttendants:[''],
        temporaryLabAttendants:[''],
        partimeLabAttendants:[''],
       
        permanentAccountant:[''],
        temporaryAccountant:[''],
        partimeAccountant:[''],
       
        permanentPeon:[''],
        temporaryPeon:[''],
        partimePeon:[''],
       
        temporaryOthers:[''],
        permanentOthers:[''],
        partimeOthers:[''],
      }),


      schoolprofilepage14:this.fb.group({
        curricularActivities:[''],
        groups:[''],
        communityCount:[''],
    
        lastyearSchoolLevel:[''],
        lastyearZonalLevel:[''],
        lastyearDistrictLevel:[''],
        lastyearNationalLevel:[''],
        lastyearInternationalLevel:[''],
        lastyearStateLevel:[''],
    
        schoolLevelCompetitions:[''],
        zonalLevelCompetitions:[''],
        districtLevelCompetitions:[''],
        nationalLevelCompetitions:[''],
        stateLevelCompetitions:[''],
        internationalLevelCompetitions:[''],
    
        schoolLevelProgrammes:[''],
        zonalLevelProgrammes:[''],
        nationalLevelProgrammes:[''],
        stateLevelProgrammes:[''],
        districtLevelProgrammes:[''],
        internationalLevelProgrammes:[''],
      }),

      schoolprofilepage15:this.fb.group({
              
      academicYearBegins:[''],
      academicYearEnds:[''],

      workingdays21:[''],
      workingdays20:[''],
      workingdays19:[''],

      hours21:[''],
      hours20:[''],
      hours19:[''],

      instructionalHours21:[''],
      instructionalHours20:[''],
      instructionalHours19:[''],

      noninstructionalHours21:[''],
      noninstructionalHours20:[''],
      noninstructionalHours19:[''],
      
      holidays21:[''],
      holidays20:[''],
      holidays19:[''],
      }),

      schoolprofilepage16:this.fb.group({
             
      subjectPerWeek:[''],
      morelPerWeek:[''],
      teachingDuration:[''],
      clubsCount:[''],
      timeInSummer:[''],
      totimeInSummer:[''],
      timeInWinter:[''],
      totimeInWinter:[''],
      shifts:['']
      }),

      

    })
    this.subservice.gen().subscribe(arg=>{
      this.data=arg;
      console.log(this.data);
      this.generalForm.patchValue(this.data)
    })
    this.next()
  }
  // loadData(){
  //   this.generalForm=this.fb.group({
  //   schoolName:[this.data.SchoolName],   
  //   post:[this.data.post],
  //   district:[this.data.district],
  //   state:[this.data.state],
  //   city:[this.data.city],
  //   schoolPhoneNumber:[this.data.schoolPhoneNumber],
  //   schoolUrl:[this.data.schoolUrl],
  //   schoolEmail:[this.data.SchoolEmail],
  //   pinCode:[this.data.pinCode],
  //   schoolLocation:[this.data.schoolLocation],
  //   specialChild:[this.data.specialChild],
  //   academicYear:[this.data.academicYear],
  //   estabilshedYear:[this.data.estabilshedYear],
  //   schoolLevel:[this.data.schoolLevel],
  //   medium:[this.data.medium],
  //   natureAffiliation:[this.data.natureAffiliation],
  //   teachingStaff:[this.data.teachingStaff],
  //   gender:[this.data.gender],
  //   girls:[this.data.girls],
  //   boys:[this.data.boys],
  //   students:[this.data.students],
  //   nonTeachingStaff:[this.data.nonTeachingStaff],
  //   correspondentName:[this.data.correspondentName],
  //   correspondentPhoneNumber:[this.data.correspondentPhoneNumber],
  //   principalName:[this.data.principalName],
  //   principalEmail:[this.data.principalEmail],
  //   principalPhoneNumber:[this.data.principalPhoneNumber],
  //   officialPhoneNumber:[this.data.officialPhoneNumber],
  //   governmentRecognized:[this.data.governmentRecognized],
  //   affiliatedBoard:[this.data.affiliatedBoard],
  //   affiliationNumber:[this.data.affiliationNumber],
  //   affiliationYear:[this.data.affiliationYear],
  //   affiliationCondition:[this.data.affiliationCondition],
  //   stateAffiliationCondition:[this.data.stateAffiliationCondition],
  //   statusCertificate:[this.data.statusCertificate],
  //   hindhu:[this.data.hindhu],
  //   cristian:[this.data.cristian],
  //   islam:[this.data.islam],
  //   others:[this.data.others],
  //   nonBelievers:[this.data.nonBelievers],
  //   fireCertificate:[this.data.fireCertificate],
  //   sanitationCertificate:[this.data.sanitationCertificate],
  //   buildingCertificate:[this.data.buildingCertificate],
  //   schoolOwnedBy:[this.data.schoolOwnedBy],
  //   trustName:[this.data.trustName],
  //   trustRegistered:[this.data.trustRegistered],
  //   underAct:[this.data.underAct],
  //   registrationYear:[this.data.registrationYear],
  //   registrationNumber:[this.data.registrationNumber],
  //   registrationValidity:[this.data.registrationValidity],
  //   chairmanName:[this.data.chairmanName],
  //   designation:[this.data.designation],
  //   chairmainAddress:[this.data.chairmainAddress],
  //   chairmanPhoneNumber:[this.data.chairmanPhoneNumber],
  //   chairmanEmail:[this.data.chairmanEmail],
  //   governingBody:[this.data.governingBody],
  //   trustMember:[this.data.trustMember],
  //   tenureMember:[this.data.tenureMember],
  //   epcc:[this.data.epcc],
  //   epccMember:[this.data.epccMember],
  //   epccTenureMember:[this.data.epccTenureMember],
  //   parentTeacherAssociation:[this.data.parentTeacherAssociation],
  //   parentTeacherAssociationMember:[this.data.parentTeacherAssociationMember],
  //   parentTeacherTenureMember:[this.data.parentTeacherTenureMember],
  //   studentCouncil:[this.data.studentCouncil],
  //   studentCouncilMembers:[this.data.studentCouncilMembers],
  //   studentCouncilTenureMember:[this.data.studentCouncilTenureMember],
  //   generalGrievance:[this.data.generalGrievance],
  //   schoolCommittee:[this.data.schoolCommittee],
  //   committeeCondition:[this.data.committeeCondition],
  //   committeeConditionMembers:[this.data.committeeConditionMembers],
  //   committeeTenureMember:[this.data.committeeTenureMember ],      
  //   malePrincipal:[this.data.malePrincipal],
  //   femalePrincipal:[this.data.femalePrincipal],
  //   temporaryMalePrincipal:[this.data.temporaryMalePrincipal],
  //   temporaryFemalePrincipal:[this.data.temporaryFemalePrincipal],
  
  //   maleViceprincipal:[this.data.maleViceprincipal],
  //   femaleViceprincipal:[this.data.femaleViceprincipal],
  //   temporaryMaleViceprincipal:[this.data.temporaryMaleViceprincipal],
  //   temporaryFemaleViceprincipal:[this.data.temporaryFemaleViceprincipal],

  //   postgraduateTeachers:[this.data.postgraduateTeachers],
  //   postgraduateFemaleTeachers:[this.data.postgraduateFemaleTeachers],
  //   temporaypgmaleStaff:[this.data.temporaypgmaleStaff],
  //   temporaypgFemaleStaff:[this.data.temporaypgmaleStaff],
    
  //   tgMaleStaff:[this.data.tgMaleStaff],
  //   tgFemaleStaff:[this.data.tgFemaleStaff],
  //   temporarytgFemaleStaff:[this.data.temporarytgFemaleStaff],
  //   temporarytgMaleStaff:[this.data.temporarytgMaleStaff],
    
  //   untrainMalestaff:[this.data.untrainMalestaff],
  //   untrainFemalestaff:[this.data.untrainFemalestaff],
  //   untrainedTemporaryMale:[this.data.untrainedTemporaryMale],
  //   untrainedTemporaryFemale:[this.data.untrainedTemporaryFemale],
    
  //   primaryMaleStaff:[this.data.primaryMaleStaff],
  //   primaryFemaleStaff:[this.data.primaryFemaleStaff],
  //   temporaryPrimarymale:[this.data.temporaryPrimarymaler],
  //   temporaryPrimaryfemale:[this.data.temporaryPrimaryfemale],
    
  //   nurseryMaleStaff:[this.data.nurseryMaleStaff],
  //   nurseryFemaleStaff:[this.data.nurseryFemaleStaff],
  //   ntTemporaryMale:[this.data.ntTemporaryMale],
  //   ntTemporaryFemale:[this.data.ntTemporaryFemale],
   
  //   MaleLibraian:[this.data.MaleLibraian],
  //   FemaleLibraian:[this.data.FemaleLibraian],
  //   temporaryMaleLibrarian:[this.data.temporaryMaleLibrarian],
  //   temporaryFemaleLibrarian:[this.data.temporaryFemaleLibrarian],
    
  //   artMaleStaff:[this.data.art_permale],
  //   artFemaleStaff:[this.data.artFemaleStaff],
  //   artTemporaryMalestaff:[this.data.artTemporaryMalestaff],
  //   artTemporaryFemalestaff:[this.data.artTemporaryFemalestaff],
            
  //   maleCounseller:[this.data.maleCounseller],
  //   femaleCounseller:[this.data.femaleCounseller],
  //   temporaryMaleCounseller:[this.data.temporaryMaleCounseller],
  //   temporaryFemaleCounseller:[this.data.temporaryFemaleCounseller],
    
  //   MaleComputerLiteracy:[this.data.MaleComputerLiteracy],
  //   FemaleComputerLiteracy:[this.data.FemaleComputerLiteracy],
  //   temporaryMaleComputerLiteracy:[this.data.temporaryMaleComputerLiteracy],
  //   temporaryFemaleComputerLiteracy:[this.data.temporaryFemaleComputerLiteracy],
    
  //   MaleFaithminister:[this.data.MaleFaithminister],
  //   FemaleFaithminister:[this.data.FemaleFaithminister],
  //   temporaryMaleFaithminister:[this.data.temporaryFemaleFaithminister],
  //   temporaryFemaleFaithminister:[this.data.temporaryFemaleFaithminister],
    
  //   maleNurse:[this.data.maleNurse],
  //   femaleNurse:[this.data.femaleNurse],
  //   temporaryMalenurse:[this.data.temporaryFemalenurse],
  //   temporaryFemalenurse:[this.data.temporaryFemalenurse],
    
  //   malePtTeacher:[this.data.malePtTeacher],
  //   femalePtTeacher:[this.data.femalePtTeacher],
  //   temporaryMalept:[this.data.temporaryMalept],
  //   temporaryFemalept:[this.data.temporaryFemalept],
    

  //   permanentofficeManager:[this.data.permanentofficeManager],
  //   temporaryofficeManager:[this.data.temporaryofficeManager],
  //   partimeofficeManager:[this.data.partimeofficeManager],
   
  //   permanentOfficialAssitent:[this.data.permanentOfficialAssitent],
  //   temporaryOfficialAssitent:[this.data.temporaryOfficialAssitent],
  //   partimeOfficialAssitent:[this.data.partimeOfficialAssitent],
    
  //   permanentClerk:[this.data.permanentClerk],
  //   temporaryClerk:[this.data.temporaryClerk],
  //   partimeClerk:[this.data.partimeClerk],
   
  //   permanentLabAttendants:[this.data.permanentLabAttendants],
  //   temporaryLabAttendants:[this.data.temporaryLabAttendants],
  //   partimeLabAttendants:[this.data.partimeLabAttendants],
    
  //   permanentAccountant:[this.data.permanentAccountant],
  //   temporaryAccountant:[this.data.temporaryAccountant],
  //   partimeAccountant:[this.data.partimeAccountant],
    
  //   permanentPeon:[this.data.permanentPeon],
  //   temporaryPeon:[this.data.temporaryPeon],
  //   partimePeon:[this.data.partimePeon],
   
  //   temporaryOthers:[this.data.temporaryOthers],
  //   permanentOthers:[this.data.permanentOthers],
  //   partimeOthers:[this.data.partimeOthers],
  
  //   schoolBuilding:[this.data.schoolBuilding],
  //   campusArea:[this.data.campusArea],
  //   buspass:[this.data.buspass],
  //   builtArea:[this.data.builtArea],
  //   playArea:[this.data.playArea],
  //   numberOfBuilding:[this.data.numberOfBuilding],
  //   provisions:[this.data.provisions],
  //   staircasesNumber:[this.data.staircasesNumber],
  //   liftNumber:[this.data.liftNumber],
  //   classRooms:[this.data.classRooms],
  //   staffrooms:[this.data.staffrooms],
  //   physicsLab:[this.data.physicsLab],
  //   chemistrylab:[this.data.chemistrylab],
  //   biologylab:[this.data.biologylab],
  //   mathslab:[this.data.mathslab],
  //   computerscienceLab:[this.data.computerscienceLab],
  //   languageLab:[this.data.languageLab],
  //   homescienceLab:[this.data.homescienceLab],
  //   library:[this.data.library],
  //   auditorium:[this.data.auditorium],
  //   counselorroom:[this.data.counselorroom],
  //   parlor:[this.data.parlor],
  //   chapel:[this.data.chapel],
  //   sickroom:[this.data.sickroom],
  //   canteen:[this.data.canteen],
  //   securityroom:[this.data.securityroom ],
  //   otherroom:[this.data.otherroom],
  //   staffToilet:[this.data.staffToilet],
  //   studenttoilet:[this.data.studenttoilet],
  //   rooms:[this.data.rooms],
  //   specialStudent:[this.data.specialStudent],
  //   wall:[this.data.wall],
  //   wallCondition:[this.data.wallCondition],
  //   cctv:[this.data.cctv],
  //   datasaved:[this.data.datasaved],
  //   cameraCount:[this.data.cameraCount],
  //   maleguard:[this.data.maleguard],
  //   maleGuardCount:[this.data.maleGuardCount],
  //   femaleguard:[this.data.femaleguard],
  //   femaleguardCount:[this.data.femaleguardCount],
  //   water:[this.data.water],
  //   drainage:[this.data.drainage],
  //   middayMeal:[this.data.middayMeal],
  //   ownedBuses:[this.data.ownedBuses],
  //   gps:[this.data.gps],
  //   ladyAttendance:[this.data.ladyAttendance],
  //   firstaid:[this.data.firstaid],
  //   drinkingWater:[this.data.drinkingWater],
  //   subcontracted:[this.data.subcontracted],
  //   freeTransport:[this.data.freeTransport],
  //   curricularActivities:[this.data.curricularActivities],
  //   groups:[this.data.groups],
  //   communityCount:[this.data.communityCount],
  //   lastyearSchoolLevel:[this.data.lastyearSchoolLevel],
  //   lastyearZonalLevel:[this.data.lastyearZonalLevel],
  //   lastyearDistrictLevel:[this.data.lastyearDistrictLevel],
  //   lastyearNationalLevel:[this.data.lastyearNationalLevel],
  //   lastyearInternationalLevel:[this.data.lastyearInternationalLevel],

  //   schoolLevelCompetitions:[this.data.schoolLevelCompetitions],
  //   zonalLevelCompetitions:[this.data.zonalLevelCompetitions],
  //   districtLevelCompetitions:[this.data.districtLevelCompetitions],
  //   nationalLevelCompetitions:[this.data.nationalLevelCompetitions],
  //   internationalLevelCompetitions:[this.data.internationalLevelCompetitions],

  //   schoolLevelProgrammes:[this.data.schoolLevelProgrammes],
  //   zonalLevelProgrammes:[this.data.zonalLevelProgrammes],
  //   nationalLevelProgrammes:[this.data.nationalLevelProgrammes],
  //   stateLevelProgrammes:[this.data.stateLevelProgrammes],
  //   internationalLevelProgrammes:[this.data.internationalLevelProgrammes],
  //   districtLevelProgrammes:[this.data.districtLevelProgrammes],
  //   lastyearStateLevel:[this.data.lastyearStateLevel],
  //   stateLevelCompetitions:[this.data.stateLevelCompetitions],

  //   academicYearBegins:[this.data.academicYearBegins],
  //   academicYearEnds:[this.data.academicYearEnds],
  //   workingdays21:[this.data.workingdays21],
  //   workingdays20:[this.data.workingdays20],
  //   workingdays19:[this.data.workingdays19],
  //   hours21:[this.data.hours21],
  //   hours20:[this.data.hours20],
  //   hours19:[this.data.hours19],
  //   instructionalHours21:[this.data.instructionalHours21],
  //   instructionalHours20:[this.data.instructionalHours20],
  //   instructionalHours19:[this.data.instructionalHours19],
  //   noninstructionalHours21:[this.data.noninstructionalHours21],
  //   noninstructionalHours20:[this.data.noninstructionalHours20],
  //   noninstructionalHours19:[this.data.noninstructionalHours19],
  //   holidays21:[this.data.holidays21],
  //   holidays20:[this.data.holidays20],
  //   holidays19:[this.data.holidays19],
    
  //   subjectPerWeek:[this.data.subjectPerWeek],
  //   morelPerWeek:[this.data.morelPerWeek],
  //   teachingDuration:[this.data.teachingDuration],
  //   clubsCount:[this.data.clubsCount],
  //   timeInSummer:[this.data.timeInSummer],
  //   totimeInSummer:[this.data.totimeInSummer],
  //   timeInWinter:[this.data.timeInWinter],
  //   totimeInWinter:[this.data.totimeInWinter],
  //   shifts:[this.data.shifts]
   

  //   })}
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


onSave(){
  var data=this.page+this.step
  this.subservice.general(this.generalForm.controls[data].value).subscribe(arg =>{
    console.log(arg) 
    this.data=arg
    if(this.data.update){
      console.log("hii");
      this.subservice.sclproupdate(this.generalForm.controls[data].value).subscribe(arg =>{
      this.router.navigate(['/home'])
      })
    }
    this.router.navigate(['/home']);
  // var data=this.page+this.step

})
}
}


