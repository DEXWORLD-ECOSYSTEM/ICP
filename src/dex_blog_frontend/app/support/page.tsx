
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Centro de Suporte</h1>
        <p className="text-lg text-muted-foreground mt-2">Estamos aqui para ajudar. Encontre respostas para suas perguntas.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Perguntas Frequentes (FAQ)</CardTitle>
              <CardDescription>Respostas rápidas para as dúvidas mais comuns.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Como posso criar uma conta?</AccordionTrigger>
                  <AccordionContent>
                    Para criar uma conta, clique no botão "Inscrever-se" no canto superior direito da página inicial e preencha o formulário com suas informações.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Como posso redefinir minha senha?</AccordionTrigger>
                  <AccordionContent>
                    Você pode redefinir sua senha clicando em "Esqueceu sua senha?" na página de login. Siga as instruções enviadas para o seu e-mail.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Onde posso encontrar meus artigos salvos?</AccordionTrigger>
                  <AccordionContent>
                    Seus artigos salvos estão disponíveis no seu painel de controle, na seção "Meus Artigos".
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Como posso entrar em contato com o suporte?</AccordionTrigger>
                  <AccordionContent>
                    Você pode nos contatar usando o formulário de contato nesta página ou enviando um e-mail para support@example.com.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Guias e Tutoriais</CardTitle>
              <CardDescription>Aprenda a usar nossa plataforma com nossos guias passo a passo.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary hover:underline">Guia de Início Rápido</a></li>
                <li><a href="#" className="text-primary hover:underline">Como Escrever e Publicar seu Primeiro Artigo</a></li>
                <li><a href="#" className="text-primary hover:underline">Entendendo as Métricas de Engajamento</a></li>
                <li><a href="#" className="text-primary hover:underline">Personalizando seu Perfil</a></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Contate-nos</CardTitle>
              <CardDescription>Não encontrou o que procurava? Envie-nos uma mensagem.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Assunto da sua mensagem" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Escreva sua mensagem aqui." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
