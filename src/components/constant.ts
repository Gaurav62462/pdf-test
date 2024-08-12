type ConstantsType = {
    entityname:string,
    formId:string,
    formNo:string,
    partner:string,
    statement:string
}

type CapitalType = {
    title:string
    statementN:string
}

type ExpanseType = {
    name: string;
    col1: string;
    col2: string;
    total: string;
  }[];

  type SingleFamilyType = {
    singleF:string
    property:string
    location:string
    assosiate:string
    rental:string
    assosiateA:string
    rentalA:string
  }

export const Constants: ConstantsType = {
    entityname:'Entity Name',
    formId:'12-3456789',
    formNo:'Form 1065',
    partner:"Partner's Capital account summary" ,
    statement:'Statement 7'
}

export const OtherCapitals: CapitalType = {
    title:"Other Rental Expenses" ,
    statementN:'Statement 6',
}


export const arr: ExpanseType = [
    {name:'Partner Number', col1:'1', col2:'2', total:'Total'},
    {name:'Beginning Capital', col1:'123,23', col2:'2322', total:'4505'},
    {name:'Capital Contributed', col1:'451', col2:'2554', total:'7444'},
    {name:'Schedule M-2', col1:'134', col2:'342', total:'2323'},
    {name:'With... Drawls', col1:'-', col2:'-', total:'-'},
    {name:'Ending Capital', col1:'Total', col2:'23,282', total:'423424'},
  ]
  export const SingleFamily : SingleFamilyType = {
    singleF:'Single Family Residence',
    property:'Residental Rental',
    location:'1430 20th Street #6, West Des Monies, 1A 50265',
    assosiate:'Association Dues',
    assosiateA:'2820',
    rental:'Total to rental schedule, line 15',
    rentalA:'2820'
}

export const OtherRental : SingleFamilyType = {
    singleF:'Single Family Residence',
    property:'Residental Rental',
    location:'605 NE AVE, Des Moies , 1A 50313',
    assosiate:'Supply Pest Control',
    assosiateA:'1381',
    rental:'Total to rental schedule, line 15',
    rentalA:'1381'
}


export type CommentType = {
    id: number;
    text: string;
  };

 export type CommentProps = {
    comment: CommentType;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
  };

  export type RentalExpensesProps = {
    data: {
      singleF: string;
      location: string;
      property: string;
      assosiateA: string;
      assosiate: string;
      rental: string;
      rentalA: string;
    };
  };