/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Button, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Valley Digital"
const ADMIN_URL = "https://valleydigital.lovable.app/admin-leads"

const serviceLabels: Record<string, string> = {
  "web-copy": "Web + Copy Overhaul",
  logo: "Professional Logo",
  rebrand: "The Complete Rebrand",
}

interface NewInquiryProps {
  name?: string
  business?: string
  email?: string
  service?: string
  bottleneck?: string
  vision?: string
}

const NewInquiryNotificationEmail = ({
  name = 'Unknown',
  business = 'Unknown',
  email = '',
  service = '',
  bottleneck = '',
  vision = '',
}: NewInquiryProps) => {
  const serviceLabel = service ? (serviceLabels[service] || service) : 'Not specified'

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New inquiry from {name} at {business}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Discovery Inquiry</Heading>
          <Text style={subtext}>A new lead just came in through your site.</Text>
          <Hr style={divider} />

          <Section style={detailSection}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={detailSection}>
            <Text style={label}>Business</Text>
            <Text style={value}>{business}</Text>
          </Section>

          <Section style={detailSection}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={detailSection}>
            <Text style={label}>Service Interest</Text>
            <Text style={value}>{serviceLabel}</Text>
          </Section>

          {bottleneck ? (
            <Section style={detailSection}>
              <Text style={label}>Bottleneck</Text>
              <Text style={value}>{bottleneck}</Text>
            </Section>
          ) : null}

          {vision ? (
            <Section style={detailSection}>
              <Text style={label}>12-Month Vision</Text>
              <Text style={value}>{vision}</Text>
            </Section>
          ) : null}

          <Hr style={divider} />

          <Button style={button} href={ADMIN_URL}>
            View in Admin Dashboard
          </Button>

          <Text style={footer}>
            {SITE_NAME} · Lead Notifications
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: NewInquiryNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New Inquiry: ${data.business || 'Unknown'} — ${data.service ? (serviceLabels[data.service] || data.service) : 'General'}`,
  to: 'ivan@valleydigital.co',
  displayName: 'New inquiry notification',
  previewData: {
    name: 'Jane Smith',
    business: 'Acme Co',
    email: 'jane@acme.co',
    service: 'rebrand',
    bottleneck: 'Our website doesn\'t convert visitors into customers.',
    vision: 'Be the go-to brand in our industry with 3x revenue.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: '800' as const, color: '#1a1a2e', margin: '0 0 8px' }
const subtext = { fontSize: '14px', color: '#6b7280', margin: '0 0 24px' }
const divider = { borderColor: '#e5e7eb', margin: '24px 0' }
const detailSection = { margin: '0 0 16px' }
const label = { fontSize: '11px', fontWeight: '600' as const, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 2px' }
const value = { fontSize: '15px', color: '#111827', margin: '0', lineHeight: '1.5' }
const button = {
  backgroundColor: 'hsl(210, 100%, 56%)',
  color: '#ffffff',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600' as const,
  padding: '12px 24px',
  textDecoration: 'none',
  display: 'inline-block' as const,
  margin: '0 0 24px',
}
const footer = { fontSize: '12px', color: '#9ca3af', margin: '0' }
