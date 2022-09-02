export interface Item {
  id: number;
  title: string;
  content: string;
}

export interface SearchInfo {
  totalhits: number;
}

export interface Continue {
  continue: string;
  sroffset: number;
}

export interface Data {
  data: WikiData;
}

export interface WikiData {
  batchcomplete: string;
  continue: Continue;
  query: WikiQuery;
}

export interface WikiQuery {
  searchinfo: SearchInfo;
  search: WikiSearch[];
}

export interface WikiSearch {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}
