import Incident from '../Incident';
import AnalystVASS from '../analyst/AnalystVASS';

describe('My Incidents', () => {

  const analystVASS = new AnalystVASS(
    'Manuel',
    'devops.manuel@gmail.com',
    'VASS',
    'DEVOPS'
  );

  const incident = new Incident('URL_TICKET', false, '', analystVASS);

  test('defines setUrlTicket', () => {
    expect(typeof incident.setUrlTicket).toBe('function');
  });

  test('defines getUrlTicket', () => {
    expect(incident.getUrlTicket()).toBe('URL_TICKET');
    incident.setUrlTicket('URL_TICKET_2');
    expect(incident.getUrlTicket()).toBe('URL_TICKET_2');
  });

  test('defines setOriginAdl', () => {
    expect(typeof incident.setOriginAdl).toBe('function');
  });

  test('defines isOriginAdl', () => {
    expect(incident.isOriginAdl()).toBe(false);
    incident.setOriginAdl(true);
    expect(incident.isOriginAdl()).toBe(true);
  });

  test('defines setAnalystVASS', () => {
    expect(typeof incident.setAnalystVASS).toBe('function');
  });

  test('defines getAnalystVASS', () => {
    expect(incident.getAnalystVASS()).toBe(analystVASS);

    const analystVASS2 = new AnalystVASS(
      'Pepe',
      'devops.pepe@gmail.com',
      'VASS',
      'DATA'
    );
    
    incident.setAnalystVASS(analystVASS2);
    expect(incident.getAnalystVASS()).toBe(analystVASS2);
  })
});