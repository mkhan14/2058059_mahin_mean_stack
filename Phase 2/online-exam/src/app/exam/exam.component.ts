import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  showScore:boolean=false;
  showSubmit:boolean=true;
  pass:boolean=true;
  fail:boolean=false;
  score=0;
  myForm:FormGroup;

  ques:Array<Exam>=[];
  ans:Array<any>=[];


  constructor(public examSer:ExamService, public form:FormBuilder) {
    this.myForm=form.group({});
   } //DI for Exam Service

  ngOnInit(): void {
    this.examSer.checkQuestion().subscribe(result=> {
      for(let q of result){
        this.myForm?.addControl(q.question,this.form.control(""));
        this.ques.push(q)
        this.ans.push(q.correctAns)
      }
  })
  console.log(this.ques);
  console.log(this.ans);
  }

  checkExam(){
    let i = 0;
  
    //this logs the questions:
    Object.keys(this.myForm.value).forEach(q=>console.log(q))

    //this logs the selected choices of each question!!
    Object.keys(this.myForm.value).forEach(q=>{
      console.log(this.myForm.value[q]);
      

      let sel = document.getElementById(this.myForm.value[q]);
      let corSel = document.getElementById(this.ans[i]);
      if(corSel != null && sel != null){
        if(this.myForm.value[q] != this.ans[i]){
          sel.style.backgroundColor='lightsalmon';
        } else if(this.myForm.value[q] == this.ans[i]) {
            this.score++;
            corSel.style.backgroundColor='palegreen';
            sel.style.backgroundColor='palegreen';
        }
      }
      
      i++;
    })

    this.showScore=true;
    this.showSubmit=false;
    if(this.score >= 7){
      this.fail = false;
      this.pass = true;
    }
    if(this.score < 7){
      this.pass = false;
      this.fail = true;
    }
  }

}
