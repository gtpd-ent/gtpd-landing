const generateCodeVerifier = (length: number) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const generateCodeChallenge = async (verifier: string) => {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

export const redirectToAuth = async (client_id: string) => {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  console.log('Generated verifier', verifier);

  localStorage.setItem('verifier', verifier);

  const params = new URLSearchParams();
  params.append('client_id', client_id);
  params.append('response_type', 'code');
  params.append('redirect_uri', 'http://localhost:3000/');
  params.append('scope', 'user-read-private user-read-email');
  params.append('code_challenge_method', 'S256');
  params.append('code_challenge', challenge);

  console.log('Redirecting to Spotify auth', params.toString());

  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
};

export const getAccessToken = async (client_id: string, code: string) => {
  const verifier = localStorage.getItem('verifier');

  const params = new URLSearchParams();
  params.append('client_id', client_id);
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append(
    'redirect_uri',
    'https://gtpd-landing-git-spotify-demo-gtpds-projects.vercel.app/',
  );
  params.append('code_verifier', verifier!);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });

  const { access_token } = await response.json();

  return access_token;
};

export const fetchProfile = async (access_token: string) => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${access_token}` },
  });

  return await response.json();
};
