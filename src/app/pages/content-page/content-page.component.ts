import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css'
})
export class ContentPageComponent {
  contentCover:string=""
  contentCoverAlt:string=""
  contentTitle:string=""
  contentCategory:string=""
  contentPlaytime:string=""
  contentDescription:string=""
  contentReview:string=""
  contentSS1:string=""
  contentSS2:string=""
  contentSS3:string=""
  contentSSAlt:string=""
  private id:string | null ="0"
  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id") 
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentCover = result.contentCover
    this.contentCoverAlt = result.contentCoverAlt
    this.contentTitle = result.contentTitle
    this.contentCategory = result.contentCategory
    this.contentPlaytime = result.contentPlaytime
    this.contentDescription = result.contentDescription
    this.contentReview = result.contentReview
    this.contentSS1 = result.contentSS1
    this.contentSS2 = result.contentSS2
    this.contentSS3 = result.contentSS3
    this.contentSSAlt = result.contentSSAlt
    
  }

}
