"use client";
import { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Column,
  Row,
  Text,
  Icon,
  Heading,
  Badge,
} from "@/once-ui/components";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = form;
    if (!message || (!email && !phone && !name)) {
      setError("Message and at least one of Name, Email or Phone is required.");
      return;
    }
    setError("");
    console.log("Submitted:", form);
  };

  return (
    <Row gap="16" mobileDirection="column" padding="12" width={"l"}>
      {/* Left Side Info */}
      <Column flex={1} gap="4" vertical="start">
        <Heading variant="display-strong-m" marginBottom="16">
          Let’s get in touch
        </Heading>

        <Row align="center" gap="8">
          <Icon name="phone" size="l" />
          <Heading variant="body-default-l">+1 My Phone Number</Heading>
        </Row>

        <Row align="center" gap="8" marginTop="8">
          <Icon name="email" size="l" />
          <Heading variant="body-default-l">flicks@bricks.com</Heading>
        </Row>

        <Row gap="12" marginTop="12">
          <Icon name="linkedin" size="l" as="a" href="https://linkedin.com" />
          <Icon
            name="instagram"
            size="l"
            as="a"
            href="https://instagram.com"
            target="_blank"
          />
          <Icon
            name="behance"
            size="l"
            as="a"
            href="https://behance.net"
            target="_blank"
          />
        </Row>
      </Column>

      {/* Right Side Form */}
      <Column
        flex={2}
        as="form"
        gap="12"
        onSubmit={handleSubmit}
        aria-labelledby="contact-heading"
      >
        <Input
          id="contact-name"
          label="Name"
          value={form.name}
          onChange={handleChange("name")}
          hasPrefix={
            <Icon
              name="person"
              size="xs"
              onBackground="neutral-weak"
              marginLeft={4}
            />
          }
        />
        <Input
          id="contact-email"
          label="Email"
          value={form.email}
          onChange={handleChange("email")}
          hasPrefix={
            <Icon
              name="email"
              size="xs"
              onBackground="neutral-weak"
              marginLeft={4}
            />
          }
        />
        <Input
          id="contact-phone"
          label="Phone"
          value={form.phone}
          onChange={handleChange("phone")}
          hasPrefix={
            <Icon
              name="phone"
              size="xs"
              onBackground="neutral-weak"
              marginLeft={4}
            />
          }
        />
        <Textarea
          id="contact-message"
          label="Message"
          value={form.message}
          onChange={handleChange("message")}
          hasPrefix={
            <Icon
              name="message"
              size="xs"
              onBackground="neutral-weak"
              marginLeft={4}
            />
          }
        />
        {error && (
          <Text textVariant="label-default-s" onBackground="danger-strong">
            {error}
          </Text>
        )}
        <Badge
          as="button"
          type="submit"
          title="Send Message"
          solid="brand-medium"
          onSolid="brand-strong"
        />
      </Column>
    </Row>
  );
}
