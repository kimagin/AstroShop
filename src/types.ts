export type Site = {
  TITLE: string
  DESCRIPTION: string
  AUTHOR: string
  IMAGE: string
  LOCAL_REGION: string
  LANGUAGE: 'en' | 'pl'
  DIRECTION: 'ltr' | 'rtl'
}

export type Metadata = {
  TITLE: string
  DESCRIPTION: string
}

export type Socials = {
  NAME: string
  HREF: string
}[]
