import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quote:Quote;
  quote1:Quote;
  quote2:Quote;
  quote3:Quote;
  quote4:Quote;
  quote5:Quote;
  quote6:Quote;
  quote7:Quote;
  quote8:Quote;
  quote9:Quote;
  quote10:Quote;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
      
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote1= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote2= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote3= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote4= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote5= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote6= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote7= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote8= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote9= new Quote(data.author, data.quote)
    })
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      
      this.quote10= new Quote(data.author, data.quote)
    })
  }

}
