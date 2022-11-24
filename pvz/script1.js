function compareNumeric(a, b) {
  if(a>b) return 1;
  if(a==b) return 0;
  if(a<b) return- 1;
}



let knygos = {
  grozine: [
    {
      isbn: 9786098233346,
      price: 7.99,
      year: 2006,
      title: "Bloga dukte",
      pagecount: 250
    },
    {
      isbn: 9786098233391,
      price: 7.99,
      year: 2015,
      title: "Mergina kuria jis pazinojo",
      pagecount: 315
    },
    {
      isbn: 9786099609324,
      price: 7.99,
      year: 2019,
      title: "Tapk ragana",
      pagecount: 150
    },
    {
      isbn: 9786094792250,
      price: 6.99,
      year: 2007,
      title: "Sfera",
      pagecount: 450
    },
    {
      isbn: 9786094792335,
      price: 9.99,
      year: 2019,
      title: "Mes susitinkame cia",
      pagecount: 500
    }
  ],
  scifi: [
    {
      isbn: 9786094273780,
      price: 7.99,
      year: 2019,
      title: "Sunaikinimas",
      pagecount: 509
    },
    {
      isbn: 9786098233483,
      price: 12.99,
      year: 2018,
      title: "Artemide",
      pagecount: 199
    },
    {
      isbn: 9786094273872,
      price: 4.99,
      year: 2015,
      title: "Fondas ir imperija",
      pagecount: 185
    },
    {
      isbn: 9786094273902,
      price: 7.99,
      year: 2019,
      title: "Amzinybes fjordo pranasai",
      pagecount: 333
    }
  ],
  'skandinaviski detektyvai': [
    {
      isbn: 9786094442742,
      price: 5.99,
      year: 2004,
      title: "Bejegiai",
      pagecount: 777
    },
    {
      isbn: 9786094442940,
      price: 14.99,
      year: 2019,
      title: "Klajunai",
      pagecount: 172
    },
    {
      isbn: 9786090404386,
      price: 7.99,
      year: 2015,
      title: "Mergina, kuri pakliuvo i voratinkli",
      pagecount: 356
    }
  ]
}

for (let pirmas in knygos){

  //console.log(knygos[pirmas]);

  for(let antras in knygos[pirmas]){

   //console.log(knygos[pirmas][antras]);
    
    for(let trecias in knygos[pirmas][antras]){

     //console.log(knygos[pirmas][antras][trecias]);
     //console.log(typeof knygos[pirmas][antras][trecias]);
     //console.log(trecias + " : " +knygos[pirmas][antras][trecias])



     if(knygos[pirmas][antras][trecias] == 2018){
      //console.log("Kategorija: " +pirmas);
      //console.log(trecias + " : " +knygos[pirmas][antras][trecias])
      for(let text in knygos[pirmas][antras]){
        //console.log(text + " : " +knygos[pirmas][antras][trecias])
      }
    }

    //console.log("===========================================")
    //console.log("Kategorija: " +pirmas);
    //console.log("===========================================")

      if(typeof knygos[pirmas][antras][trecias] == 'number'){

        if(knygos[pirmas][antras][trecias] <= 100){
          console.log(knygos[pirmas][antras][trecias]);
        }
        //console.log(trecias + " : " +knygos[pirmas][antras][trecias])
        //console.log(knygos[pirmas][antras][trecias]);

        //array.sort == min
      }




    }
  }
}


