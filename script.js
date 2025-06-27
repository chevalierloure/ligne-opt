<script>
// Date de début : 8 juin 2025
const startDate = new Date('2025-06-27T00:00:00');

// Délai d’expiration en jours
const expirationDays = 30;

// Vérifie si le lien a expiré
function isLinkExpired() {
  const now = new Date();
  const timeDiff = now - startDate;
  const daysPassed = timeDiff / (1000 * 60 * 60 * 24);
  return daysPassed >= expirationDays;
}

// Affiche un message d’expiration avec style percutant
function showExpirationMessage() {
  if (isLinkExpired()) {
    // Supprimer tout le contenu de la page
    document.body.innerHTML = '';

    // Créer le conteneur du message
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
      <h1>⚠️ Le lien a expiré</h1>
      <p>Veuillez contacter l’administrateur du site pour plus d’informations.</p>
    `;

    // Style impactant
    Object.assign(messageDiv.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
      color: '#ff4d4f',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      fontSize: '24px',
      textAlign: 'center',
      padding: '40px',
      boxSizing: 'border-box',
      zIndex: '9999',
    });

    // Style du titre
    messageDiv.querySelector('h1').style.fontSize = '36px';
    messageDiv.querySelector('h1').style.marginBottom = '20px';
    messageDiv.querySelector('p').style.color = '#ffffff';

    // Afficher sur la page
    document.body.appendChild(messageDiv);
  }
}

// Lancer au chargement de la page
window.onload = showExpirationMessage;
</script>