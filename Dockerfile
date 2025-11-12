# Stage 1: Build
FROM node:18-alpine AS builder

# تعيين مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ ملفات التعريف فقط لتسريع build (cache layers)
COPY package*.json ./

# تثبيت dependencies
RUN npm install

# نسخ بقية الملفات
COPY . .

# بناء المشروع
RUN npm run build

# Stage 2: Run
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# نسخ الملفات الضرورية من المرحلة السابقة
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# تعيين المنفذ الافتراضي
EXPOSE 3000

# تشغيل التطبيق
CMD ["npm", "start"]
