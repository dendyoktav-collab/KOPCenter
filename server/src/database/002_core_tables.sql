-- ==========================
-- ROLE
-- ==========================

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ==========================
-- USERS
-- ==========================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    username VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    full_name VARCHAR(200) NOT NULL,

    email VARCHAR(200),

    phone VARCHAR(30),

    role_id UUID REFERENCES roles(id),

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT NOW(),

    updated_at TIMESTAMP DEFAULT NOW()
);

-- ==========================
-- PERMISSIONS
-- ==========================

CREATE TABLE permissions (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    permission_name VARCHAR(100) UNIQUE NOT NULL,

    description TEXT
);

-- ==========================
-- ROLE PERMISSION
-- ==========================

CREATE TABLE role_permissions (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    role_id UUID REFERENCES roles(id),

    permission_id UUID REFERENCES permissions(id)
);

-- ==========================
-- AUDIT LOG
-- ==========================

CREATE TABLE audit_logs (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID,

    module VARCHAR(100),

    activity TEXT,

    ip_address VARCHAR(100),

    created_at TIMESTAMP DEFAULT NOW()
);