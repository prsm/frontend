import { Typography } from '@pr1sm/refracted';

export default function TextSection({}) {
  return (
    <div>
      <Typography variant="pretitle" text="12 / 10 / 2021" component="div" color="red" />
      <Typography variant="h2" text="PR1SM" component="h1" />
      <Typography variant="subtitle" text="Herzlich Willkommen auf unserer temporären Website" component="div" />
      <Typography variant="h3" text="Was ist PR1SM?" component="h2" className="mt-4" />
      <Typography variant="body" component="p">
        Wir sind ein lokaler Kulturverein, der sich in den folgenden Bereichen einsetzt: Gaming, Informatik,
        Online/Offline Events, Lanparties und andere Aktivitäten.
      </Typography>
      <Typography variant="h5" component="h2">Was machen wir?</Typography>
      <Typography variant="body" component="p">
        Wir organisieren regelmässig eigene Events wie Turniere in verschiedenen Games oder sogar LAN Partys. Zudem
        treffen wir uns für gesellschaftliche Aktivitäten wie z. B. einen Pokerabend. Gelegentlich nehmen wir an
        verschiedenen Turnieren teil, um uns mit Teams von anderen Organisationen zu messen. Bei der Teilnahme an
        Wettkämpfen suchen wir die Herausforderung, behalten den Fokus allerdings immer auf Gemeinsamkeit und Spass.
        Auch Spieler, die nicht auf einem professionellen Niveau spielen, sollen bei uns eine Plattform für
        wettkampfmässigen E-Sport finden.
      </Typography>
      <Typography variant="body" component="p">
        Wir haben eine starke Verbindung zu unseren Mitgliedern. Wir haben viele erfahrene Spieler, die euch jederzeit
        Tipps geben können. Sei dies im Bereich Gaming oder auch Informatik. Wir sind offen gegenüber sämtlichen
        Einstellungen und Meinungen. Auch tauschen wir uns täglich über aktuelle Ereignisse aus und führen offene
        Diskussionen. Wir würdigen Erfolge mit gegenseitiger Wertschätzung und Zuneigung. Niemand wird ausgeschlossen.
        Wir bieten eine warme, offene und friedliche Umgebung. Spass, Freude und das Beisammensein stehen im
        Vordergrund.
      </Typography>
      <Typography variant="body" component="p">
        Wenn wir dein Interesse geweckt haben, komm doch einfach mal auf unseren Discord Server.
      </Typography>
      <Typography variant="body" component="p">
        Hier findest du immer Leute zum spielen sowie mehrere Textchannels um mit uns über Games sowie andere technische
        Dinge zu reden 😃
      </Typography>
      <Typography variant="body" component="p">
        Wir freuen uns auf dich!
      </Typography>
    </div>
  );
}
