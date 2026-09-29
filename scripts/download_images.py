import subprocess
import re
import html
import os

os.makedirs('public/images/barber', exist_ok=True)
shortcodes = [
    'DJ0Vp0TCmec',
    'C4us_8uMzBH',
    'C4jRv-YMtA0',
    'C4a1R4oirqw',
    'C4T9Rv7i54r',
    'C4Rm_-yicJR',
    'CNvyCbRMdvc'
]

all_images = {}

for code in shortcodes:
    all_images[code] = []
    endpoints = [
        f'https://www.instagram.com/p/{code}/',
        f'https://www.instagram.com/p/{code}/embed/',
        f'https://www.instagram.com/p/{code}/embed/captioned/'
    ]
    for endpoint in endpoints:
        try:
            raw = subprocess.check_output(['curl', '-sL', endpoint], timeout=15).decode('utf-8', errors='ignore')
            matches = re.findall(r'https://scontent[^\s"\'<>]+', raw)
            for m in matches:
                clean = html.unescape(m).replace('&amp;', '&').replace('\\u0026', '&')
                for bad_char in ['"', "'", '\\', '<', '>', ';']:
                    clean = clean.split(bad_char)[0]
                base = clean.split('?')[0]
                if any(k in base for k in ['t51.75761-15', 't51.82787-15', 't51.2885-15', 't51.82787-19', 't51.29350-15']):
                    if base not in [x[0] for x in all_images[code]]:
                        all_images[code].append((base, clean))
        except Exception as e:
            print(f'Error fetching {endpoint}: {e}')

total = 0
saved_files = []
for code, imgs in all_images.items():
    print(f'Post {code}: {len(imgs)} candidate images found')
    for idx, (base, url) in enumerate(imgs, 1):
        if 't51.82787-19' in base:
            fname = f'barber_avatar_{code}.jpg'
        else:
            fname = f'barber_{code}_{idx}.jpg'
        out_path = os.path.join('public/images/barber', fname)
        subprocess.run(['curl', '-sL', url, '-o', out_path], timeout=15)
        if os.path.exists(out_path) and os.path.getsize(out_path) > 8000:
            print(f'  Saved {fname} ({os.path.getsize(out_path)} bytes)')
            total += 1
            saved_files.append(out_path)
        else:
            if os.path.exists(out_path):
                os.remove(out_path)

print(f'\nTotal successfully downloaded and verified: {total}')
for f in saved_files:
    print(' ', f)
