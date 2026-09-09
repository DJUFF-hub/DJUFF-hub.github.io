import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Members } from '@/components/site/members';
import { Footer } from '@/components/site/footer';
import { siteContent } from '@/content/site';

export const metadata: Metadata = { title: 'O grupo — DJUFF', description: 'História e integrantes do grupo de desenvolvimento de jogos da UFF.' };
export const dynamic = 'force-static';
export default function GroupPage(){return <main><Header/><section className="section group-intro"><div className="section-heading"><div><span className="section-number">01</span><h1>O grupo</h1></div><p>Formação, troca e produção de jogos dentro da Universidade Federal Fluminense.</p></div><div className="group-story"><p className="statement">Um coletivo para entender jogos por dentro e construir em conjunto.</p><div><p>O DJUFF surgiu em 2019 a partir do encontro de estudantes interessados em criar um espaço contínuo de aprendizado e produção de jogos na UFF.</p><p>{siteContent.about}</p><p>O grupo é coordenado pelo professor Esteban Clua e reúne pessoas de diferentes cursos e momentos de formação.</p></div></div></section><Members/><Footer/></main>}
