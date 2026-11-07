import type { Metadata } from 'next';
export const SITE_URL='https://cadifor.com';
export const DESCRIPTION='Le roman La Maison des vivants et l’encyclopédie du Haut Royaume de Cadifor : personnages, dynastie, lieux et scènes d’un univers de fiction.';
/** Every source page owns its address, including on client navigation. */
export function pageMetadata(path:string,title:string,description:string):Metadata{return {title,description,alternates:{canonical:path},openGraph:{title:title+' — Cadifor',description,url:path,type:'website',siteName:'Cadifor',locale:'fr_FR'},twitter:{card:'summary',title:title+' — Cadifor',description}};}
export const siteGraph={'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':'https://byss-group.com/#organization',name:'Byss Group',url:'https://byss-group.com/'},{'@type':'WebSite','@id':SITE_URL+'/#website',url:SITE_URL+'/',name:'Cadifor',inLanguage:'fr-FR',description:DESCRIPTION,publisher:{'@id':'https://byss-group.com/#organization'}}]};
