-- Custom SQL migration file, put your code below! --
ALTER TABLE public."Chat" ADD CONSTRAINT unique_remoteJid_instanceId UNIQUE ("remoteJid", "instanceId");
