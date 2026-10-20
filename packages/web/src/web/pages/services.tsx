import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Clock3 } from "lucide-react";
import { useServices } from "../queries/services";
import { Loader, PageIntro, SectionLabel, whatsapp } from "../components/site";

const times = ["09:00", "10:30", "13:30", "15:00", "16:30"];
const localDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 10);

export default function Services() {
  const services = useServices();
  const [selected, setSelected] = useState("revisao");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bike, setBike] = useState("");
  const [step, setStep] = useState(1);
  const service = services.data?.find((s) => s.id === selected);
  const formattedDate = date
    ? new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";
  const message = `Olá equipe Xororó Bike Center! Gostaria de agendar a ${service?.name ?? "revisão"} para ${formattedDate} às ${time}. Minha bike é uma ${bike.trim() || "bike a informar"}. Entendo que a data e o horário dependem de validação da equipe.`;
  return (
    <>
      <PageIntro
        number="02 / 04"
        kicker="OFICINA ESPECIALIZADA"
        title={
          <>
            CUIDADO QUE
            <br />
            <em>VOCÊ SENTE.</em>
          </>
        }
        description="Da manutenção preventiva aos ajustes mais finos, sua bike recebe atenção técnica para você aproveitar cada quilômetro com confiança."
      />
      <section className="services-hero shell">
        <div className="services-photo">
          <img src="/images/workshop.webp" alt="Trabalho técnico em uma oficina de bicicletas" />
          <span>PRECISÃO / CUIDADO / PERFORMANCE</span>
        </div>
        <div className="services-hero-copy">
          <span className="eyebrow accent">CADA DETALHE IMPORTA</span>
          <h2>
            SUA BIKE
            <br />
            NO SEU
            <br />
            <em>MELHOR RITMO.</em>
          </h2>
          <p>
            Uma boa revisão não começa na ferramenta: começa ouvindo você. Nosso atendimento é
            consultivo, do diagnóstico à entrega.
          </p>
        </div>
      </section>
      <section className="service-list shell">
        <SectionLabel index="01">SERVIÇOS / ESCOLHA SEU CUIDADO</SectionLabel>
        <div className="section-heading">
          <h2>
            OFICINA PARA
            <br />
            <em>IR MAIS LONGE.</em>
          </h2>
          <p>
            Selecione o serviço que combina com o momento da sua bike. A equipe confirma escopo,
            prazo e valor após avaliar sua necessidade.
          </p>
        </div>
        {services.isLoading ? (
          <Loader label="Carregando serviços" />
        ) : services.isError ? (
          <p>Não foi possível carregar os serviços.</p>
        ) : (
          <div className="service-rows">
            {services.data?.map((s) => (
              <div className="service-row" key={s.id}>
                <span className="service-number">{s.number}</span>
                <div>
                  <span className="eyebrow accent">{s.eyebrow}</span>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                </div>
                <div className="service-inclusions">
                  <span>O QUE ENVOLVE</span>
                  {s.inclusions.map((i) => (
                    <span key={i}>
                      <Check size={13} />
                      {i}
                    </span>
                  ))}
                </div>
                <div className="service-action">
                  <span>
                    <Clock3 size={15} />
                    {s.duration}
                  </span>
                  <button
                    onClick={() => {
                      setSelected(s.id);
                      setStep(1);
                      document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    SOLICITAR HORÁRIO <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="fineprint">
          * Durações são estimativas ilustrativas. Prazo, escopo e valor final são confirmados pela
          equipe após avaliação.
        </p>
      </section>
      <section className="booking-section" id="agendar">
        <div className="shell booking-grid">
          <div className="booking-intro">
            <span className="eyebrow accent">02 / SOLICITAÇÃO DE ATENDIMENTO</span>
            <h2>
              VAMOS
              <br />
              CUIDAR DA
              <br />
              <em>SUA BIKE?</em>
            </h2>
            <p>
              Escolha uma preferência de dia e horário. Em seguida, envie o pedido por WhatsApp para
              a equipe validar a agenda com você.
            </p>
            <div className="booking-steps">
              <span className={step === 1 ? "active" : ""}>01 — SUA PREFERÊNCIA</span>
              <span className={step === 2 ? "active" : ""}>02 — VALIDAÇÃO POR WHATSAPP</span>
            </div>
          </div>
          <div className="booking-card">
            {step === 1 ? (
              <>
                <div className="form-heading">
                  <span>01 / PREFERÊNCIA DE HORÁRIO</span>
                  <h3>Conte o que sua bike precisa.</h3>
                  <p>
                    Estes horários são sugestões para contato, não disponibilidade em tempo real.
                  </p>
                </div>
                <label className="field-label" htmlFor="service">
                  SERVIÇO DESEJADO
                </label>
                <select id="service" value={selected} onChange={(e) => setSelected(e.target.value)}>
                  {services.data?.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <label className="field-label" htmlFor="date">
                  DATA PREFERIDA
                </label>
                <input
                  id="date"
                  aria-label="Data preferida"
                  type="date"
                  min={localDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <span className="field-label">HORÁRIO PREFERIDO</span>
                <div className="time-grid">
                  {times.map((t) => (
                    <button
                      key={t}
                      className={time === t ? "selected" : ""}
                      onClick={() => setTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <label className="field-label" htmlFor="bike">
                  MARCA / MODELO DA BIKE
                </label>
                <input
                  id="bike"
                  aria-label="Marca e modelo da bike"
                  placeholder="Ex.: minha MTB full suspension"
                  value={bike}
                  onChange={(e) => setBike(e.target.value)}
                />
                <button
                  className="button button-yellow booking-submit"
                  disabled={!date || !time || !bike.trim() || services.isLoading}
                  onClick={() => setStep(2)}
                >
                  CONTINUAR SOLICITAÇÃO <ArrowRight size={18} />
                </button>
                <p className="form-note">Nenhum horário será reservado nesta etapa.</p>
              </>
            ) : (
              <div className="booking-confirm">
                <span className="confirm-icon">
                  <Check size={26} />
                </span>
                <span className="eyebrow accent">PREFERÊNCIA REGISTRADA NESTA TELA</span>
                <h3>
                  FALTA SÓ
                  <br />
                  CONVERSAR.
                </h3>
                <p>
                  Seu pedido ainda <strong>não é um agendamento confirmado.</strong> Toque abaixo
                  para enviar as informações ao consultor. A equipe validará peças e disponibilidade
                  antes de confirmar com você.
                </p>
                <div className="booking-summary">
                  <span>
                    SERVIÇO <strong>{service?.name}</strong>
                  </span>
                  <span>
                    PREFERÊNCIA{" "}
                    <strong>
                      {formattedDate} · {time}
                    </strong>
                  </span>
                  <span>
                    SUA BIKE <strong>{bike}</strong>
                  </span>
                </div>
                <a
                  className="button button-yellow booking-submit"
                  href={whatsapp(message)}
                  target="_blank"
                  rel="noreferrer"
                >
                  ENVIAR PEDIDO NO WHATSAPP <ArrowUpRight size={18} />
                </a>
                <button className="back-step" onClick={() => setStep(1)}>
                  ← EDITAR PREFERÊNCIA
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
