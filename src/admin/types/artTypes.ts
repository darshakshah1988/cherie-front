type  Image={
    src:string;
    alt:string;
  }
  
  export interface ArtCardData {
    status?: 'sold' | 'onSale';
    title?: string; 
    Holders?: string;
    SalesRate?:string;
    ResidualQuality?:string; 
    PublishDate?:string;
    image:Image; 
  }
  export interface ArtCardProps{
    cardItems:ArtCardData[];
  }
  
  