export interface ItchGame { name:string; url:string; image:string; description?:string; genre?:string }
export interface ItchCollection { title:string; url:string; games:ItchGame[] }
export interface ItchCatalog { source:string; syncedAt:string; collections:ItchCollection[] }
