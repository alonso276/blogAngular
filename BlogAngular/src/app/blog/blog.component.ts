import { Component, OnInit } from '@angular/core';
import { Post } from '../postinterface';
import { DataService } from '../Services/data.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts:Post[];

  constructor( private dataService:DataService) { 

    
    
  }

    ngOnInit(): void {

      this.dataService.getAllPosts()
      .then(posts=>{
        this.arrPosts=posts;
      })
      .catch(error=> console.log(error));
    
    }

    async onChange($event){

      if($event.target.value==='todas'){

        this.arrPosts=await this.dataService.getAllPosts();
      }else{
        this.arrPosts=await this.dataService.getPostbyCategoria($event.target.value);
      }
    }

}
