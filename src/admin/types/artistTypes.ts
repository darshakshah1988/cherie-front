type Image = {
  src: string;
  alt: string;
};

export interface ArtistData {
  id: number;
  status: 'Deactive' | 'Active';
  description: string;
  title: string;
  image: Image;
}

type NotableArtwork = {
  artworkName: string;
  artworkDescription: string;
  artworkFile: null;
};

export type NewArtist = {
  name: string;
  overview: string;
  artistImage: null;
  notableArtworks: Array<NotableArtwork>;
};
