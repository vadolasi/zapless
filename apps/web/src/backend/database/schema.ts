import { relations } from "drizzle-orm";
import { pgTable, varchar, uuid, json, pgEnum, text } from "drizzle-orm/pg-core";

export * from "./auth-schema"

import * as authSchema from "./auth-schema"

export const usersRelations = relations(authSchema.user, ({ many }) => ({
  instances: many(instancesTable),
}));

export const instancesTable = pgTable("instances", {
  id: uuid().primaryKey(),
  userId: text().notNull().references(() => authSchema.user.id)
});

export const instancesRelations = relations(instancesTable, ({ one, many }) => ({
  user: one(authSchema.user, {
    fields: [instancesTable.userId],
    references: [authSchema.user.id],
  }),
  sessions: many(whatsapp_sessionsTable),
  chats: many(whatsapp_chatsTable),
  messages: many(whatsapp_messagesTable),
  tags: many(whatsapp_tagsTable),
}));

export const whatsapp_sessionsTable = pgTable("whatsapp_sessions", {
  id: uuid().primaryKey(),
  creds: json().notNull(),
  instanceId: uuid().notNull().references(() => instancesTable.id),
})

export const whatsapp_sessionsRelations = relations(whatsapp_sessionsTable, ({ one }) => ({
  instance: one(instancesTable, {
    fields: [whatsapp_sessionsTable.instanceId],
    references: [instancesTable.id],
  }),
}));

export const chatTypeEnum = pgEnum("chat_type", [
  "GROUP",
  "PRIVATE",
]);

export const whatsapp_chatsTable = pgTable("whatsapp_chats", {
  id: uuid().primaryKey(),
  instanceId: uuid().notNull().references(() => instancesTable.id),
  type: chatTypeEnum().notNull(),
})

export const whatsapp_chatsRelations = relations(whatsapp_chatsTable, ({ one, many }) => ({
  instance: one(instancesTable, {
    fields: [whatsapp_chatsTable.instanceId],
    references: [instancesTable.id],
  }),
  messages: many(whatsapp_messagesTable),
  tags: many(whatsapp_chat_tagsTable),
}));

export const whatsapp_messageTypeEnum = pgEnum("message_type", [
  "TEXT",
  "IMAGE",
  "VIDEO",
  "AUDIO",
  "DOCUMENT",
  "LOCATION",
  "CONTACT",
]);

export const whatsapp_messagesTable = pgTable("whatsapp_messages", {
  id: uuid().primaryKey(),
  chatId: uuid().notNull().references(() => whatsapp_chatsTable.id),
  instanceId: uuid().notNull().references(() => instancesTable.id),
  type: whatsapp_messageTypeEnum().notNull(),
  content: json().notNull(),
})

export const whatsapp_messagesRelations = relations(whatsapp_messagesTable, ({ one }) => ({
  instance: one(instancesTable, {
    fields: [whatsapp_messagesTable.instanceId],
    references: [instancesTable.id],
  }),
  chat: one(whatsapp_chatsTable, {
    fields: [whatsapp_messagesTable.chatId],
    references: [whatsapp_chatsTable.id],
  }),
}));

export const whatsapp_tagsTable = pgTable("whatsapp_tags", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  instanceId: uuid().notNull().references(() => instancesTable.id),
})

export const whatsapp_tagsRelations = relations(whatsapp_tagsTable, ({ one, many }) => ({
  instance: one(instancesTable, {
    fields: [whatsapp_tagsTable.instanceId],
    references: [instancesTable.id],
  }),
  chats: many(whatsapp_chat_tagsTable),
}));

export const whatsapp_chat_tagsTable = pgTable("whatsapp_chat_tags", {
  id: uuid().primaryKey(),
  chatId: uuid().notNull().references(() => whatsapp_chatsTable.id),
  tagId: uuid().notNull().references(() => whatsapp_tagsTable.id)
})

export const whatsapp_chat_tagsRelations = relations(whatsapp_chat_tagsTable, ({ one }) => ({
  chat: one(whatsapp_chatsTable, {
    fields: [whatsapp_chat_tagsTable.chatId],
    references: [whatsapp_chatsTable.id],
  }),
  tag: one(whatsapp_tagsTable, {
    fields: [whatsapp_chat_tagsTable.tagId],
    references: [whatsapp_tagsTable.id],
  }),
}));
