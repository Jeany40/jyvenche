import base64
import sys
import os

try:
    data_str = sys.argv[1]
    if ',' in data_str:
        data = data_str.split(',')[1]
    else:
        data = data_str
    
    with open('public/logo-premium.png', 'wb') as f:
        f.write(base64.b64decode(data))
    print(f"Successfully saved to {os.getcwd()}/public/logo-premium.png")
    print(f"File size: {os.path.getsize('public/logo-premium.png')} bytes")
except Exception as e:
    print(f"Error: {str(e)}")
    sys.exit(1)
